/**
 * Checkout System
 * Handles checkout process, payment preparation, and order management
 */

const Checkout = (function() {
    'use strict';

    const ORDER_KEY = 'currentOrder';
    const CHECKOUT_ENDPOINT = 'https://create-coinbase-checkout.adheesharavindu001.workers.dev';
    const CHECKOUT_TIMEOUT_MS = 15000;
    let isPaymentInProgress = false;

    /**
     * Validate checkout form
     * @param {Object} formData - Form data object
     * @returns {Object} - Validation result
     */
    function validateForm(formData) {
        const errors = [];

        // Validate name
        if (!Utils.isValidRequired(formData.name, 2)) {
            errors.push('Please enter a valid name (minimum 2 characters)');
        }

        // Validate email
        if (!Utils.isValidEmail(formData.email)) {
            errors.push('Please enter a valid email address');
        }

        // Validate phone
        if (formData.phone && !Utils.isValidPhone(formData.phone)) {
            errors.push('Please enter a valid phone number');
        }

        // Validate address
        if (!Utils.isValidRequired(formData.address, 5)) {
            errors.push('Please enter a valid address (minimum 5 characters)');
        }

        // Validate city
        if (!Utils.isValidRequired(formData.city, 2)) {
            errors.push('Please enter a valid city');
        }

        // Validate postal code
        if (!Utils.isValidRequired(formData.postalCode, 3)) {
            errors.push('Please enter a valid postal code');
        }

        // Validate country
        if (!Utils.isValidRequired(formData.country, 2)) {
            errors.push('Please select a country');
        }

        return {
            valid: errors.length === 0,
            errors: errors
        };
    }

    /**
     * Sanitize form data
     * @param {Object} formData - Raw form data
     * @returns {Object} - Sanitized form data
     */
    function sanitizeFormData(formData) {
        return {
            name: Security.sanitizeText(formData.name || ''),
            email: Security.sanitizeEmail(formData.email || ''),
            phone: Security.sanitizeText(formData.phone || ''),
            address: Security.sanitizeText(formData.address || ''),
            city: Security.sanitizeText(formData.city || ''),
            state: Security.sanitizeText(formData.state || ''),
            postalCode: Security.sanitizeText(formData.postalCode || ''),
            country: Security.sanitizeText(formData.country || ''),
            notes: Security.sanitizeText(formData.notes || '')
        };
    }

    /**
     * Calculate order totals
     * @param {string} country - Destination country
     * @returns {Object} - Order totals
     */
    function calculateTotals(country) {
        const cartSummary = Cart.getSummary();
        const shipping = Utils.calculateShipping(country);
        
        return {
            subtotal: cartSummary.subtotal,
            shipping: shipping,
            total: cartSummary.subtotal + shipping,
            itemCount: cartSummary.itemCount,
            items: cartSummary.items
        };
    }

    /**
     * Create order object
     * @param {Object} customerData - Customer information
     * @param {Object} totals - Order totals
     * @returns {Object} - Order object
     */
    function createOrder(customerData, totals) {
        const orderId = Utils.generateOrderId();
        const timestamp = new Date().toISOString();

        return {
            id: orderId,
            date: timestamp,
            customer: customerData,
            items: totals.items,
            subtotal: totals.subtotal,
            shipping: totals.shipping,
            total: totals.total,
            status: 'pending',
            currency: 'USD'
        };
    }

    /**
     * Save order before payment redirect
     * @param {Object} order - Order object
     * @returns {boolean} - Success status
     */
    function saveOrder(order) {
        return Security.safeLocalStorageSet(ORDER_KEY, order);
    }

    /**
     * Get saved order
     * @returns {Object|null} - Order object or null
     */
    function getSavedOrder() {
        return Security.safeLocalStorageGet(ORDER_KEY, null);
    }

    /**
     * Clear saved order
     */
    function clearSavedOrder() {
        try {
            localStorage.removeItem(ORDER_KEY);
        } catch (e) {
            console.error('Failed to clear order:', e);
        }
    }

    /**
     * Prepare Coinbase Commerce checkout
     * @param {Object} order - Order object
     * @returns {string} - Coinbase Commerce checkout URL
     */
    function prepareCryptoPayment(order) {
        // In production, you would generate this URL server-side
        // For now, we'll create a hosted checkout link structure
        
        // IMPORTANT: Replace with your actual Coinbase Commerce hosted checkout link
        const COINBASE_CHECKOUT_URL = 'https://commerce.coinbase.com/checkout/YOUR_CHECKOUT_ID';
        
        // Save order before redirect
        saveOrder(order);
        
        // Return checkout URL with order reference
        return `${COINBASE_CHECKOUT_URL}?order=${encodeURIComponent(order.id)}`;
    }



    /**
     * Process checkout
     * @param {Object} formData - Form data
     * @param {string} paymentMethod - 'crypto' or 'card'
     * @returns {Object} - Processing result
     */
    function processCheckout(formData, paymentMethod) {
        // Validate cart
        const cartValidation = Cart.validateCart();
        if (!cartValidation.valid) {
            return {
                success: false,
                error: cartValidation.message
            };
        }

        // Sanitize form data
        const sanitizedData = sanitizeFormData(formData);

        // Validate form
        const validation = validateForm(sanitizedData);
        if (!validation.valid) {
            return {
                success: false,
                error: validation.errors.join('. ')
            };
        }

        // Calculate totals
        const totals = calculateTotals(sanitizedData.country);

        // Create order
        const order = createOrder(sanitizedData, totals);

        // Prepare payment (crypto only)
        if (paymentMethod === 'crypto') {
            const checkoutUrl = prepareCryptoPayment(order);
            return {
                success: true,
                paymentMethod: 'crypto',
                redirectUrl: checkoutUrl,
                order: order
            };
        } else {
            return {
                success: false,
                error: 'Invalid payment method'
            };
        }
    }

    /**
     * Extract checkout URL from worker response (supports common naming variants)
     * @param {Object} data - Worker response JSON
     * @returns {string} - Checkout URL or empty string
     */
    function extractCheckoutUrl(data) {
        if (!data || typeof data !== 'object') {
            return '';
        }

        return data.checkoutUrl || data.checkout_url || data.url ||
            (data.data && (data.data.checkoutUrl || data.data.checkout_url || data.data.url)) || '';
    }

    /**
     * Convert thrown fetch errors into clear user-facing messages
     * @param {Error} error - Error from payment flow
     * @returns {string} - User-facing message
     */
    function getPaymentErrorMessage(error) {
        if (error && error.name === 'AbortError') {
            return 'Payment server timed out. Please try again in a few seconds.';
        }

        if (error && /failed to fetch|networkerror/i.test(error.message || '')) {
            return 'Unable to reach payment server. Check your internet connection and endpoint/CORS settings.';
        }

        return (error && error.message) ? error.message : 'Unable to process crypto payment. Please try again.';
    }

    /**
     * Pay with Crypto via Cloudflare Worker
     * Handles crypto payment flow: validates cart, sends order to worker, saves order, redirects to checkout
     */
    async function payWithCrypto() {
        if (isPaymentInProgress) {
            return;
        }

        isPaymentInProgress = true;
        const cryptoBtn = document.getElementById('crypto-btn');
        if (cryptoBtn) {
            cryptoBtn.disabled = true;
        }

        Utils.hideError('checkout-error');
        Utils.showLoading('checkout-loading', 'Processing your order...');

        // Get cart data
        const cart = Cart.getCart();
        
        // Defensive validation: check cart is not empty
        if (!cart || cart.length === 0) {
            Utils.showError('checkout-error', 'Your cart is empty.');
            return;
        }

        // Critical: Validate all items have id field (not just productId)
        const itemsWithoutId = cart.filter(item => !item.id);
        if (itemsWithoutId.length > 0) {
            console.error('Cart contains items without id field. Clearing cart.', itemsWithoutId);
            Cart.clearCart();
            Utils.showError('checkout-error', 'Cart data is corrupted. Please refresh and add items again.');
            setTimeout(() => {
                window.location.href = 'shop.html';
            }, 2000);
            return;
        }

        // Validate all items have required properties
        const invalidItems = cart.filter(item => !item.size || !item.color);
        if (invalidItems.length > 0) {
            Utils.showError('checkout-error', 'All items must have size and color selected.');
            return;
        }

        // Get form data for shipping calculation and order details
        const formData = {
            name: document.getElementById('name')?.value.trim() || '',
            email: document.getElementById('email')?.value.trim() || '',
            phone: document.getElementById('phone')?.value.trim() || '',
            address: document.getElementById('address')?.value.trim() || '',
            city: document.getElementById('city')?.value.trim() || '',
            state: document.getElementById('state')?.value.trim() || '',
            postalCode: document.getElementById('postal-code')?.value.trim() || '',
            country: document.getElementById('country')?.value || '',
            notes: document.getElementById('notes')?.value.trim() || ''
        };

        // Sanitize and validate form data
        const sanitizedData = sanitizeFormData(formData);
        const validation = validateForm(sanitizedData);
        
        if (!validation.valid) {
            Utils.showError('checkout-error', validation.errors.join('. '));
            return;
        }

        // Calculate shipping cost based on country
        const shippingCost = Utils.calculateShipping(sanitizedData.country);
        const cartSummary = Cart.getSummary();

        // Build order object for Cloudflare Worker
        // Only send minimal data (id, quantity) for items - no client-side prices
        const orderPayload = {
            items: cart.map(item => ({
                id: item.id, // Cart items validated above to have id
                quantity: Number(item.quantity)
            })),
            shipping: Number(shippingCost),
            currency: 'USD',
            customer: {
                name: sanitizedData.name,
                email: sanitizedData.email,
                phone: sanitizedData.phone,
                address: `${sanitizedData.address}, ${sanitizedData.city}, ${sanitizedData.state ? sanitizedData.state + ', ' : ''}${sanitizedData.postalCode}, ${sanitizedData.country}`.replace(/, ,/g, ',').trim()
            }
        };

        console.log("ORDER SENT TO WORKER >>>", JSON.stringify(orderPayload, null, 2));

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), CHECKOUT_TIMEOUT_MS);

            // Send POST request to Cloudflare Worker
            const response = await fetch(CHECKOUT_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderPayload),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            // Check if request was successful
            if (!response.ok) {
                let serverError = `Payment server error (${response.status}).`;
                try {
                    const errorData = await response.json();
                    const errorMessage = errorData.error || errorData.message || errorData.details;
                    if (errorMessage) {
                        serverError = `${serverError} ${String(errorMessage)}`;
                    }
                } catch (_) {
                    // Ignore non-JSON error bodies and keep status-based message.
                }

                throw new Error(serverError);
            }

            // Parse response
            const data = await response.json();
            const checkoutUrl = extractCheckoutUrl(data);

            // Verify checkoutUrl exists in response
            if (!checkoutUrl) {
                throw new Error('No checkout URL received from payment server.');
            }

            // Prepare lastOrder object with full cart details for post-payment confirmation
            const lastOrder = {
                items: cart.map(item => ({
                    id: item.id,
                    name: item.name,
                    size: item.size,
                    color: item.color,
                    quantity: item.quantity,
                    price: item.price
                })),
                shipping: shippingCost,
                total: cartSummary.subtotal + shippingCost,
                brand: 'OnCloth',
                timestamp: Date.now(),
                customer: sanitizedData
            };

            // Save lastOrder to localStorage
            try {
                localStorage.setItem('lastOrder', JSON.stringify(lastOrder));
            } catch (storageError) {
                console.error('Failed to save order to localStorage:', storageError);
                throw new Error('Unable to save order. Please ensure cookies/storage are enabled.');
            }

            // Redirect to Coinbase Commerce checkout
            window.location.href = checkoutUrl;

        } catch (error) {
            // Handle any errors during the payment process
            console.error('Crypto payment error:', error);
            
            // Show user-friendly error message
            Utils.showError('checkout-error', getPaymentErrorMessage(error));
            Utils.scrollToElement('checkout-error');
        } finally {
            isPaymentInProgress = false;
            Utils.hideLoading('checkout-loading');
            if (cryptoBtn) {
                cryptoBtn.disabled = false;
            }
        }
    }

    /**
     * Initialize crypto payment button
     * Attaches click event listener to crypto payment button
     */
    function initCryptoButton() {
        const cryptoBtn = document.getElementById('crypto-btn');
        if (!cryptoBtn) {
            console.warn('Crypto button not found during initialization');
            return;
        }

        if (cryptoBtn.dataset.checkoutBound === 'true') {
            return;
        }

        console.log('Crypto button found, attaching click handler');
        // Attach payWithCrypto function to button click
        cryptoBtn.addEventListener('click', payWithCrypto);
        cryptoBtn.dataset.checkoutBound = 'true';
    }

    // Auto-initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCryptoButton);
    } else {
        initCryptoButton();
    }

    // Public API
    return {
        validateForm,
        sanitizeFormData,
        calculateTotals,
        createOrder,
        saveOrder,
        getSavedOrder,
        clearSavedOrder,
        prepareCryptoPayment,
        processCheckout,
        initCryptoButton,
        payWithCrypto
    };
})();
