/**
 * Product Catalog
 * All hoodies available for sale
 */

const Products = (function() {
    'use strict';

    // Helper function to generate SVG data URIs
    function generateImage(color, productName, view) {
        const textColor = ['#ffffff', '#fafafa', '#f5f5f5'].includes(color) ? '#333333' : '#ffffff';
        const svg = `<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
            <rect width="800" height="800" fill="${color}"/>
            ${color === '#ffffff' || color === '#fafafa' || color === '#f5f5f5' ? '<rect width="800" height="800" fill="none" stroke="#e0e0e0" stroke-width="2"/>' : ''}
            <text x="400" y="380" font-family="Arial, sans-serif" font-size="32" fill="${textColor}" text-anchor="middle" font-weight="bold">${productName}</text>
            <text x="400" y="430" font-family="Arial, sans-serif" font-size="24" fill="${textColor}" text-anchor="middle" opacity="0.8">${view}</text>
        </svg>`;
        return 'data:image/svg+xml;base64,' + btoa(svg);
    }

    // Product catalog
    const catalog = [
        {
            id: 'oncloth-hoodie-black',
            name: 'Classic Black Hoodie',
            description: 'Premium quality black hoodie made from 80% cotton, 20% polyester blend. Features a soft fleece interior, adjustable drawstring hood, and kangaroo pocket. Perfect for everyday wear.',
            price: 49.99,
            images: [
                generateImage('#1a1a1a', 'Classic Black Hoodie', 'Front View'),
                generateImage('#252525', 'Classic Black Hoodie', 'Side View'),
                generateImage('#303030', 'Classic Black Hoodie', 'Detail View')
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
                generateImage('#8c8c8c', 'Minimalist Grey Hoodie', 'Front View'),
                generateImage('#999999', 'Minimalist Grey Hoodie', 'Side View'),
                generateImage('#a6a6a6', 'Minimalist Grey Hoodie', 'Detail View')
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
                generateImage('#001f3f', 'Navy Blue Essential', 'Front View'),
                generateImage('#002952', 'Navy Blue Essential', 'Side View'),
                generateImage('#003366', 'Navy Blue Essential', 'Detail View')
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
                generateImage('#228B22', 'Forest Green Hoodie', 'Front View'),
                generateImage('#2a9d2a', 'Forest Green Hoodie', 'Side View'),
                generateImage('#32b332', 'Forest Green Hoodie', 'Detail View')
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
                generateImage('#800020', 'Burgundy Premium Hoodie', 'Front View'),
                generateImage('#8b0028', 'Burgundy Premium Hoodie', 'Side View'),
                generateImage('#990030', 'Burgundy Premium Hoodie', 'Detail View')
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
                generateImage('#ffffff', 'White Essential Hoodie', 'Front View'),
                generateImage('#fafafa', 'White Essential Hoodie', 'Side View'),
                generateImage('#f5f5f5', 'White Essential Hoodie', 'Detail View')
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
                generateImage('#36454f', 'Charcoal Heavyweight', 'Front View'),
                generateImage('#3f4f5a', 'Charcoal Heavyweight', 'Side View'),
                generateImage('#4a5a66', 'Charcoal Heavyweight', 'Detail View')
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
                generateImage('#556B2F', 'Olive Tactical Hoodie', 'Front View'),
                generateImage('#5e7a36', 'Olive Tactical Hoodie', 'Side View'),
                generateImage('#68883d', 'Olive Tactical Hoodie', 'Detail View')
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
                generateImage('#FF6B35', 'Sunset Orange Hoodie', 'Front View'),
                generateImage('#FF7644', 'Sunset Orange Hoodie', 'Side View'),
                generateImage('#FF8254', 'Sunset Orange Hoodie', 'Detail View')
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
                generateImage('#663399', 'Midnight Purple Hoodie', 'Front View'),
                generateImage('#7040a8', 'Midnight Purple Hoodie', 'Side View'),
                generateImage('#7a4db8', 'Midnight Purple Hoodie', 'Detail View')
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
                generateImage('#3498db', 'Sky Blue Hoodie', 'Front View'),
                generateImage('#41a5e6', 'Sky Blue Hoodie', 'Side View'),
                generateImage('#4eb2f0', 'Sky Blue Hoodie', 'Detail View')
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
                generateImage('#DC143C', 'Crimson Red Hoodie', 'Front View'),
                generateImage('#e22347', 'Crimson Red Hoodie', 'Side View'),
                generateImage('#e83253', 'Crimson Red Hoodie', 'Detail View')
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
