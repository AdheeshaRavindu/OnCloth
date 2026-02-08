/**
 * Utility Functions
 * Helper functions for validation, formatting, and common operations
 */

const Utils = (function() {
    'use strict';

    /**
     * Format price to USD currency
     * @param {number} amount - Price amount
     * @returns {string} - Formatted price
     */
    function formatPrice(amount) {
        if (typeof amount !== 'number' || isNaN(amount)) {
            return '$0.00';
        }
        return '$' + amount.toFixed(2);
    }

    /**
     * Validate email format
     * @param {string} email - Email address
     * @returns {boolean} - Valid or not
     */
    function isValidEmail(email) {
        if (typeof email !== 'string') {
            return false;
        }
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return regex.test(email.trim());
    }

    /**
     * Validate required form field
     * @param {string} value - Field value
     * @param {number} minLength - Minimum length
     * @returns {boolean} - Valid or not
     */
    function isValidRequired(value, minLength = 1) {
        return typeof value === 'string' && value.trim().length >= minLength;
    }

    /**
     * Validate phone number (basic)
     * @param {string} phone - Phone number
     * @returns {boolean} - Valid or not
     */
    function isValidPhone(phone) {
        if (typeof phone !== 'string') {
            return false;
        }
        // Allow numbers, spaces, dashes, parentheses, plus sign
        const regex = /^[\d\s\-\+\(\)]{8,20}$/;
        return regex.test(phone.trim());
    }

    /**
     * Calculate shipping cost based on country
     * @param {string} country - Country name
     * @returns {number} - Shipping cost
     */
    function calculateShipping(country) {
        if (!country || typeof country !== 'string') {
            return 20; // Default international
        }

        const countryLower = country.toLowerCase().trim();
        
        // Asia countries - $10
        const asiaCountries = [
            'afghanistan', 'bangladesh', 'bhutan', 'brunei', 'cambodia',
            'china', 'india', 'indonesia', 'japan', 'kazakhstan',
            'kyrgyzstan', 'laos', 'malaysia', 'maldives', 'mongolia',
            'myanmar', 'nepal', 'north korea', 'pakistan', 'philippines',
            'singapore', 'south korea', 'sri lanka', 'taiwan', 'tajikistan',
            'thailand', 'timor-leste', 'turkmenistan', 'uzbekistan', 'vietnam'
        ];
        
        if (asiaCountries.includes(countryLower)) {
            return 10;
        }
        
        // All other regions - $20
        return 20;
    }

    /**
     * Get URL parameter
     * @param {string} param - Parameter name
     * @returns {string|null} - Parameter value or null
     */
    function getURLParameter(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    /**
     * Show error message
     * @param {string} elementId - ID of error message element
     * @param {string} message - Error message
     */
    function showError(elementId, message) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = Security.sanitizeText(message);
            element.style.display = 'block';
            element.setAttribute('role', 'alert');
        }
    }

    /**
     * Hide error message
     * @param {string} elementId - ID of error message element
     */
    function hideError(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = '';
            element.style.display = 'none';
            element.removeAttribute('role');
        }
    }

    /**
     * Show success message
     * @param {string} elementId - ID of success message element
     * @param {string} message - Success message
     */
    function showSuccess(elementId, message) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = Security.sanitizeText(message);
            element.style.display = 'block';
            element.setAttribute('role', 'status');
        }
    }

    /**
     * Show loading indicator
     * @param {string} elementId - ID of loading element
     * @param {string} message - Loading message
     */
    function showLoading(elementId, message = 'Processing...') {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = Security.sanitizeText(message);
            element.style.display = 'block';
        }
    }

    /**
     * Hide loading indicator
     * @param {string} elementId - ID of loading element
     */
    function hideLoading(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.display = 'none';
        }
    }

    /**
     * Debounce function
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in ms
     * @returns {Function} - Debounced function
     */
    function debounce(func, wait = 300) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Scroll to element smoothly
     * @param {string} elementId - Element ID
     */
    function scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    /**
     * Generate unique order ID
     * @returns {string} - Unique order ID
     */
    function generateOrderId() {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substring(2, 9);
        return `ORDER-${timestamp}-${random}`.toUpperCase();
    }

    /**
     * Format date for display
     * @param {Date|string|number} date - Date object or timestamp
     * @returns {string} - Formatted date
     */
    function formatDate(date) {
        try {
            const d = new Date(date);
            if (isNaN(d.getTime())) {
                return 'Invalid date';
            }
            return d.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch (e) {
            return 'Invalid date';
        }
    }

    /**
     * Get cart item count
     * @returns {number} - Total items in cart
     */
    function getCartItemCount() {
        const cart = Security.safeLocalStorageGet('cart', []);
        const sanitized = Security.sanitizeCart(cart);
        return sanitized.reduce((total, item) => total + item.quantity, 0);
    }

    /**
     * Update cart badge
     */
    function updateCartBadge() {
        const badge = document.getElementById('cart-count');
        if (badge) {
            const count = getCartItemCount();
            badge.textContent = count;
            badge.style.display = count > 0 ? 'inline-block' : 'none';
        }
    }

    /**
     * Get countries list for dropdown
     * @returns {Array} - Array of country names
     */
    function getCountriesList() {
        return [
            'United States', 'United Kingdom', 'Canada', 'Australia',
            'Germany', 'France', 'Italy', 'Spain', 'Netherlands',
            'Belgium', 'Sweden', 'Norway', 'Denmark', 'Finland',
            'Japan', 'South Korea', 'Singapore', 'Hong Kong',
            'India', 'China', 'Thailand', 'Malaysia', 'Indonesia',
            'Philippines', 'Vietnam', 'Sri Lanka', 'Pakistan',
            'United Arab Emirates', 'Saudi Arabia', 'Qatar',
            'New Zealand', 'Ireland', 'Switzerland', 'Austria',
            'Poland', 'Czech Republic', 'Portugal', 'Greece',
            'Brazil', 'Mexico', 'Argentina', 'Chile', 'Colombia',
            'South Africa', 'Nigeria', 'Kenya', 'Egypt',
            'Other'
        ].sort();
    }

    // Public API
    return {
        formatPrice,
        isValidEmail,
        isValidRequired,
        isValidPhone,
        calculateShipping,
        getURLParameter,
        showError,
        hideError,
        showSuccess,
        showLoading,
        hideLoading,
        debounce,
        scrollToElement,
        generateOrderId,
        formatDate,
        getCartItemCount,
        updateCartBadge,
        getCountriesList
    };
})();
