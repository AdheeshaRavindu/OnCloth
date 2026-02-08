/**
 * Shopping Cart System
 * Handles cart operations with localStorage
 */

const Cart = (function() {
    'use strict';

    const CART_KEY = 'cart';

    /**
     * Get cart from localStorage
     * @returns {Array} - Cart items array
     */
    function getCart() {
        const cart = Security.safeLocalStorageGet(CART_KEY, []);
        return Security.sanitizeCart(cart);
    }

    /**
     * Save cart to localStorage
     * @param {Array} cart - Cart items array
     * @returns {boolean} - Success status
     */
    function saveCart(cart) {
        const sanitized = Security.sanitizeCart(cart);
        return Security.safeLocalStorageSet(CART_KEY, sanitized);
    }

    /**
     * Add item to cart
     * @param {Object} product - Product object
     * @param {string} size - Selected size
     * @param {string} color - Selected color
     * @param {number} quantity - Quantity to add
     * @returns {Object} - Result object with success status and message
     */
    function addItem(product, size, color, quantity = 1) {
        // Validate inputs
        if (!product || typeof product !== 'object') {
            return { success: false, message: 'Invalid product' };
        }

        // Validate variant
        if (!Products.isValidVariant(product.id, size, color)) {
            return { success: false, message: 'Invalid size or color selection' };
        }

        // Validate quantity
        const qty = Security.sanitizeNumber(quantity, 1, 5);
        if (!qty) {
            return { success: false, message: 'Invalid quantity (1-5 allowed)' };
        }

        // Get current cart
        const cart = getCart();

        // Check if item with same variant already exists
        const existingIndex = cart.findIndex(item => 
            item.id === product.id && 
            item.size === size && 
            item.color === color
        );

        if (existingIndex !== -1) {
            // Update quantity (max 5 per variant)
            const newQuantity = cart[existingIndex].quantity + qty;
            if (newQuantity > 5) {
                return { 
                    success: false, 
                    message: 'Maximum 5 items per variant allowed' 
                };
            }
            cart[existingIndex].quantity = newQuantity;
        } else {
            // Add new item
            const cartItem = {
                id: product.id,
                name: product.name,
                price: product.price,
                size: size,
                color: color,
                quantity: qty,
                image: product.images[0] || ''
            };
            cart.push(cartItem);
        }

        // Save cart
        if (saveCart(cart)) {
            Utils.updateCartBadge();
            return { 
                success: true, 
                message: 'Item added to cart',
                cartCount: Utils.getCartItemCount()
            };
        } else {
            return { success: false, message: 'Failed to save cart' };
        }
    }

    /**
     * Remove item from cart by index
     * @param {number} index - Item index in cart
     * @returns {boolean} - Success status
     */
    function removeItem(index) {
        const cart = getCart();
        
        if (index < 0 || index >= cart.length) {
            return false;
        }

        cart.splice(index, 1);
        
        if (saveCart(cart)) {
            Utils.updateCartBadge();
            return true;
        }
        
        return false;
    }

    /**
     * Update item quantity
     * @param {number} index - Item index in cart
     * @param {number} quantity - New quantity
     * @returns {boolean} - Success status
     */
    function updateQuantity(index, quantity) {
        const cart = getCart();
        
        if (index < 0 || index >= cart.length) {
            return false;
        }

        const qty = Security.sanitizeNumber(quantity, 1, 5);
        if (!qty) {
            return false;
        }

        cart[index].quantity = qty;
        
        if (saveCart(cart)) {
            Utils.updateCartBadge();
            return true;
        }
        
        return false;
    }

    /**
     * Clear entire cart
     * @returns {boolean} - Success status
     */
    function clearCart() {
        try {
            localStorage.removeItem(CART_KEY);
            Utils.updateCartBadge();
            return true;
        } catch (e) {
            console.error('Failed to clear cart:', e);
            return false;
        }
    }

    /**
     * Get cart item count
     * @returns {number} - Total number of items
     */
    function getItemCount() {
        const cart = getCart();
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    /**
     * Calculate cart subtotal
     * @returns {number} - Subtotal amount
     */
    function getSubtotal() {
        const cart = getCart();
        return cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    /**
     * Get cart summary with totals
     * @param {number} shipping - Shipping cost
     * @returns {Object} - Cart summary object
     */
    function getSummary(shipping = 0) {
        const cart = getCart();
        const subtotal = getSubtotal();
        const shippingCost = Security.sanitizeNumber(shipping, 0, 1000) || 0;
        const total = subtotal + shippingCost;

        return {
            items: cart,
            itemCount: getItemCount(),
            subtotal: subtotal,
            shipping: shippingCost,
            total: total
        };
    }

    /**
     * Validate cart before checkout
     * @returns {Object} - Validation result
     */
    function validateCart() {
        const cart = getCart();

        if (cart.length === 0) {
            return { 
                valid: false, 
                message: 'Your cart is empty' 
            };
        }

        // Validate each item against current product catalog
        for (const item of cart) {
            const product = Products.getProductById(item.id);
            
            if (!product) {
                return { 
                    valid: false, 
                    message: `Product "${item.name}" is no longer available` 
                };
            }

            if (!Products.isValidVariant(item.id, item.size, item.color)) {
                return { 
                    valid: false, 
                    message: `Variant for "${item.name}" is no longer available` 
                };
            }

            // Check if price has changed
            if (item.price !== product.price) {
                return { 
                    valid: false, 
                    message: `Price has changed for "${item.name}". Please review your cart.` 
                };
            }
        }

        return { valid: true, message: 'Cart is valid' };
    }

    /**
     * Check if cart is empty
     * @returns {boolean} - Empty status
     */
    function isEmpty() {
        return getCart().length === 0;
    }

    // Public API
    return {
        getCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getItemCount,
        getSubtotal,
        getSummary,
        validateCart,
        isEmpty
    };
})();
