/**
 * Security Module
 * Handles input sanitization and XSS prevention
 */

const Security = (function() {
    'use strict';

    /**
     * Sanitize HTML to prevent XSS attacks
     * @param {string} input - Raw user input
     * @returns {string} - Sanitized string
     */
    function sanitizeHTML(input) {
        if (typeof input !== 'string') {
            return '';
        }
        
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '/': '&#x2F;',
        };
        
        return input.replace(/[&<>"'/]/g, (char) => map[char]);
    }

    /**
     * Sanitize text for safe display
     * @param {string} input - Raw user input
     * @returns {string} - Sanitized string
     */
    function sanitizeText(input) {
        if (typeof input !== 'string') {
            return '';
        }
        
        // Remove any HTML tags
        return input.replace(/<[^>]*>/g, '').trim();
    }

    /**
     * Validate and sanitize email
     * @param {string} email - Email address
     * @returns {string|null} - Sanitized email or null if invalid
     */
    function sanitizeEmail(email) {
        if (typeof email !== 'string') {
            return null;
        }
        
        const sanitized = email.trim().toLowerCase();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        return emailRegex.test(sanitized) ? sanitized : null;
    }

    /**
     * Sanitize numeric input
     * @param {*} value - Input value
     * @param {number} min - Minimum allowed value
     * @param {number} max - Maximum allowed value
     * @returns {number|null} - Sanitized number or null if invalid
     */
    function sanitizeNumber(value, min = 0, max = Infinity) {
        const num = Number(value);
        
        if (isNaN(num) || !isFinite(num)) {
            return null;
        }
        
        if (num < min || num > max) {
            return null;
        }
        
        return num;
    }

    /**
     * Validate product variant against allowed values
     * @param {string} value - Variant value
     * @param {Array} allowedValues - Array of allowed values
     * @returns {string|null} - Valid value or null
     */
    function validateVariant(value, allowedValues) {
        if (!Array.isArray(allowedValues) || typeof value !== 'string') {
            return null;
        }
        
        const sanitized = sanitizeText(value);
        return allowedValues.includes(sanitized) ? sanitized : null;
    }

    /**
     * Sanitize cart data from localStorage
     * @param {Array} cart - Cart array from localStorage
     * @returns {Array} - Validated and sanitized cart
     */
    function sanitizeCart(cart) {
        if (!Array.isArray(cart)) {
            return [];
        }
        
        return cart.filter(item => {
            return (
                item &&
                typeof item === 'object' &&
                typeof item.id === 'string' &&
                typeof item.name === 'string' &&
                typeof item.price === 'number' &&
                typeof item.size === 'string' &&
                typeof item.color === 'string' &&
                typeof item.quantity === 'number' &&
                item.price > 0 &&
                item.quantity > 0 &&
                item.quantity <= 5
            );
        }).map(item => ({
            id: sanitizeText(item.id),
            name: sanitizeText(item.name),
            price: sanitizeNumber(item.price, 0.01, 10000),
            size: sanitizeText(item.size),
            color: sanitizeText(item.color),
            quantity: sanitizeNumber(item.quantity, 1, 5),
            image: item.image ? sanitizeText(item.image) : ''
        }));
    }

    /**
     * Prevent button double-click
     * @param {HTMLElement} button - Button element
     * @param {number} duration - Duration in ms
     */
    function disableButton(button, duration = 3000) {
        if (!button || button.disabled) {
            return;
        }
        
        button.disabled = true;
        const originalText = button.textContent;
        
        setTimeout(() => {
            button.disabled = false;
            button.textContent = originalText;
        }, duration);
    }

    /**
     * Safe JSON parse with fallback
     * @param {string} json - JSON string
     * @param {*} fallback - Fallback value if parse fails
     * @returns {*} - Parsed object or fallback
     */
    function safeJSONParse(json, fallback = null) {
        try {
            return JSON.parse(json);
        } catch (e) {
            console.error('JSON parse error:', e);
            return fallback;
        }
    }

    /**
     * Safe localStorage getter
     * @param {string} key - Storage key
     * @param {*} fallback - Fallback value
     * @returns {*} - Stored value or fallback
     */
    function safeLocalStorageGet(key, fallback = null) {
        try {
            const value = localStorage.getItem(key);
            return value ? safeJSONParse(value, fallback) : fallback;
        } catch (e) {
            console.error('localStorage get error:', e);
            return fallback;
        }
    }

    /**
     * Safe localStorage setter
     * @param {string} key - Storage key
     * @param {*} value - Value to store
     * @returns {boolean} - Success status
     */
    function safeLocalStorageSet(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('localStorage set error:', e);
            return false;
        }
    }

    // Public API
    return {
        sanitizeHTML,
        sanitizeText,
        sanitizeEmail,
        sanitizeNumber,
        validateVariant,
        sanitizeCart,
        disableButton,
        safeJSONParse,
        safeLocalStorageGet,
        safeLocalStorageSet
    };
})();
