/**
 * Product Catalog
 * All hoodies available for sale
 */

const Products = (function() {
    'use strict';



    // Product catalog
    const catalog = [
        {
            id: 'oncloth-hoodie-black',
            name: 'Classic Black Hoodie',
            description: 'Premium quality black hoodie made from 80% cotton, 20% polyester blend. Features a soft fleece interior, adjustable drawstring hood, and kangaroo pocket. Perfect for everyday wear.',
            price: 49.99,
            images: [
                'images/classic-black-1.jpg',
                'images/classic-black-2.jpg',
                'images/classic-black-3.jpg'
            ],
            variants: {
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                colors: ['Black']
            },
            active: true,
            fabric: '80% Cotton, 20% Polyester',
            fit: 'Regular Fit',
            care: 'Machine wash cold, tumble dry low'
        },
        {
            id: 'oncloth-hoodie-grey',
            name: 'Minimalist Grey Hoodie',
            description: 'Clean and simple grey hoodie with a modern minimalist design. Ultra-soft fabric with ribbed cuffs and hem. Ideal for layering or wearing solo.',
            price: 54.99,
            images: [
                'images/grey-hoodie-1.jpg',
                'images/grey-hoodie-2.jpg',
                'images/grey-hoodie-3.jpg'
            ],
            variants: {
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                colors: ['Light Grey', 'Dark Grey']
            },
            active: true,
            fabric: '85% Cotton, 15% Polyester',
            fit: 'Regular Fit',
            care: 'Machine wash cold, tumble dry low'
        },
        {
            id: 'oncloth-hoodie-navy-blue',
            name: 'Navy Blue Essential Hoodie',
            description: 'Essential navy blue hoodie built for comfort and durability. Heavy-weight fabric that gets softer with every wash. Features reinforced stitching and quality construction.',
            price: 52.99,
            images: [
                'images/navy-hoodie-1.jpg',
                'images/navy-hoodie-2.jpg',
                'images/navy-hoodie-3.jpg'
            ],
            variants: {
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                colors: ['Navy Blue']
            },
            active: true,
            fabric: '75% Cotton, 25% Polyester',
            fit: 'Regular Fit',
            care: 'Machine wash cold, tumble dry low'
        },
        {
            id: 'oncloth-hoodie-forest-green',
            name: 'Forest Green Hoodie',
            description: 'Stand out with this rich forest green hoodie. Made from premium organic cotton blend. Features a relaxed fit and exceptional comfort.',
            price: 57.99,
            images: [
                'images/green-hoodie-1.jpg',
                'images/green-hoodie-2.jpg',
                'images/green-hoodie-3.jpg'
            ],
            variants: {
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                colors: ['Forest Green']
            },
            active: true,
            fabric: '90% Organic Cotton, 10% Polyester',
            fit: 'Regular Fit',
            care: 'Machine wash cold, hang dry recommended'
        },
        {
            id: 'oncloth-hoodie-burgundy',
            name: 'Burgundy Premium Hoodie',
            description: 'Luxury burgundy hoodie with superior craftsmanship. Extra thick fabric for maximum warmth. Features metal-tipped drawstrings and reinforced seams.',
            price: 64.99,
            images: [
                'images/burgundy-hoodie-1.jpg',
                'images/burgundy-hoodie-2.jpg',
                'images/burgundy-hoodie-3.jpg'
            ],
            variants: {
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                colors: ['Burgundy']
            },
            active: true,
            fabric: '80% Cotton, 20% Polyester',
            fit: 'Regular Fit',
            care: 'Machine wash cold, tumble dry low'
        },
        {
            id: 'oncloth-hoodie-white',
            name: 'White Essential Hoodie',
            description: 'Clean white hoodie made from premium pre-shrunk cotton blend. Perfect blank canvas for any style. Features quality construction and timeless design.',
            price: 49.99,
            images: [
                'images/white-hoodie-1.jpg',
                'images/white-hoodie-2.jpg',
                'images/white-hoodie-3.jpg'
            ],
            variants: {
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                colors: ['White']
            },
            active: true,
            fabric: '80% Cotton, 20% Polyester',
            fit: 'Regular Fit',
            care: 'Machine wash cold, tumble dry low'
        },
        {
            id: 'oncloth-hoodie-oversized-black',
            name: 'Charcoal Heavyweight Hoodie',
            description: 'Heavy-duty charcoal hoodie built to last. Extra thick 12oz fabric provides exceptional warmth and durability. Perfect for cold weather.',
            price: 69.99,
            images: [
                'images/charcoal-hoodie-1.jpg',
                'images/charcoal-hoodie-2.jpg',
                'images/charcoal-hoodie-3.jpg'
            ],
            variants: {
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                colors: ['Charcoal']
            },
            active: true,
            fabric: '85% Cotton, 15% Polyester - 12oz',
            fit: 'Regular Fit',
            care: 'Machine wash cold, tumble dry low'
        },
        {
            id: 'oncloth-hoodie-olive',
            name: 'Olive Tactical Hoodie',
            description: 'Military-inspired olive hoodie with reinforced construction. Features a sturdy front pocket and heavy-duty zipper. Built for adventure.',
            price: 59.99,
            images: [
                'images/olive-hoodie-1.jpg',
                'images/olive-hoodie-2.jpg',
                'images/olive-hoodie-3.jpg'
            ],
            variants: {
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                colors: ['Olive']
            },
            active: true,
            fabric: '75% Cotton, 25% Polyester',
            fit: 'Regular Fit',
            care: 'Machine wash cold, tumble dry low'
        },
        {
            id: 'oncloth-hoodie-sunset-orange',
            name: 'Sunset Orange Hoodie',
            description: 'Bold and vibrant sunset orange hoodie that makes a statement. Soft brushed fleece interior provides exceptional comfort. Perfect for those who dare to stand out.',
            price: 54.99,
            images: [
                'images/orange-hoodie-1.jpg',
                'images/orange-hoodie-2.jpg',
                'images/orange-hoodie-3.jpg'
            ],
            variants: {
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                colors: ['Sunset Orange']
            },
            active: true,
            fabric: '80% Cotton, 20% Polyester',
            fit: 'Regular Fit',
            care: 'Machine wash cold, tumble dry low'
        },
        {
            id: 'oncloth-hoodie-midnight-purple',
            name: 'Midnight Purple Hoodie',
            description: 'Rich midnight purple hoodie with a luxurious feel. Premium brushed cotton blend offers superior softness. Features reinforced double-stitched seams and a modern relaxed fit.',
            price: 62.99,
            images: [
                'images/purple-hoodie-1.jpg',
                'images/purple-hoodie-2.jpg',
                'images/purple-hoodie-3.jpg'
            ],
            variants: {
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                colors: ['Midnight Purple']
            },
            active: true,
            fabric: '85% Cotton, 15% Polyester',
            fit: 'Relaxed Fit',
            care: 'Machine wash cold, tumble dry low'
        },
        {
            id: 'oncloth-hoodie-sky-blue',
            name: 'Sky Blue Hoodie',
            description: 'Fresh and vibrant sky blue hoodie perfect for spring and summer. Lightweight breathable fabric with moisture-wicking technology. Features a modern slim fit design.',
            price: 51.99,
            images: [
                'images/blue-hoodie-1.jpg',
                'images/blue-hoodie-2.jpg',
                'images/blue-hoodie-3.jpg'
            ],
            variants: {
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                colors: ['Sky Blue']
            },
            active: true,
            fabric: '70% Cotton, 30% Polyester',
            fit: 'Slim Fit',
            care: 'Machine wash cold, hang dry'
        },
        {
            id: 'oncloth-hoodie-crimson-red',
            name: 'Crimson Red Hoodie',
            description: 'Bold crimson red hoodie that demands attention. Premium heavyweight fabric with double-layered hood for extra warmth. Features high-quality metal aglets and reinforced pockets.',
            price: 67.99,
            images: [
                'images/red-hoodie-1.jpg',
                'images/red-hoodie-2.jpg',
                'images/red-hoodie-3.jpg'
            ],
            variants: {
                sizes: ['S', 'M', 'L', 'XL', 'XXL'],
                colors: ['Crimson Red']
            },
            active: true,
            fabric: '82% Cotton, 18% Polyester - 13oz',
            fit: 'Regular Fit',
            care: 'Machine wash cold, tumble dry low'
        }
    ];

    /**
     * Get all active products
     * @returns {Array} - Array of active products
     */
    function getAllProducts() {
        return catalog.filter(product => product.active);
    }

    /**
     * Get product by ID
     * @param {string} id - Product ID
     * @returns {Object|null} - Product object or null
     */
    function getProductById(id) {
        if (!id || typeof id !== 'string') {
            return null;
        }
        
        const product = catalog.find(p => p.id === id && p.active);
        return product || null;
    }

    /**
     * Validate product variant
     * @param {string} productId - Product ID
     * @param {string} size - Size selection
     * @param {string} color - Color selection
     * @returns {boolean} - Valid or not
     */
    function isValidVariant(productId, size, color) {
        const product = getProductById(productId);
        
        if (!product) {
            return false;
        }
        
        const validSize = product.variants.sizes.includes(size);
        const validColor = product.variants.colors.includes(color);
        
        return validSize && validColor;
    }

    /**
     * Get featured products (first 3 active)
     * @returns {Array} - Array of featured products
     */
    function getFeaturedProducts() {
        return getAllProducts().slice(0, 3);
    }

    // Public API
    return {
        getAllProducts,
        getProductById,
        isValidVariant,
        getFeaturedProducts
    };
})();
