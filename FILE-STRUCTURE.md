# Project File Structure

Complete list of all files in the OnCloth hoodie store project.

## 📁 Root Directory

```
hoodie-store/
├── README.md                    # Main documentation
├── QUICKSTART.md                # Quick setup guide (15 minutes)
├── CONFIGURATION.md             # Configuration checklist
├── FTP-DEPLOYMENT.md            # FTP upload guide
├── MAINTENANCE.md               # Troubleshooting & maintenance
├── FILE-STRUCTURE.md            # This file
└── public_html/                 # Website root (upload this to hosting)
```

## 🌐 Website Files (public_html/)

### HTML Pages (13 files)
```
public_html/
├── shop.html                    # Homepage / Product catalog (MAIN LANDING PAGE)
├── product.html                 # Single product details page
├── cart.html                    # Shopping cart page
├── checkout.html                # Checkout form (crypto payment only)
├── success.html                 # Order confirmation page
├── cancel.html                  # Payment cancelled page
├── size-guide.html              # Size guide and measurements
├── shipping.html                # Shipping information
├── returns.html                 # Returns and exchange policy
├── privacy.html                 # Privacy policy (crypto-only)
├── terms.html                   # Terms of service (crypto-only)
├── index.html                   # Legacy page (shop.html is homepage)
└── .htaccess                    # Apache configuration
```

### CSS Files (2 files)
```
public_html/css/
├── reset.css                    # CSS reset / normalize
└── main.css                     # Main stylesheet (all styling)
```

### JavaScript Files (5 files)
```
public_html/js/
├── security.js                  # Security utilities (sanitization, XSS prevention)
├── utils.js                     # Helper functions (validation, formatting)
├── products.js                  # Product catalog (all 8 hoodies)
├── cart.js                      # Shopping cart logic (localStorage)
└── checkout.js                  # Checkout logic + Cloudflare Worker integration
```

### Configuration Files
```
public_html/
└── .htaccess                    # Apache config (security, redirects, caching, HTTPS)
```

### Images Directory
```
public_html/images/
├── README.md                    # Image requirements and naming guide
└── (your product images - 24 total, 3 per hoodie)
```

## 📊 Total File Count

- **HTML Files**: 13 (including index.html legacy)
- **CSS Files**: 2  
- **JavaScript Files**: 5
- **Configuration Files**: 1 (.htaccess)
- **Documentation Files**: 6 (README, guides)
- **Total Code Files**: 21
- **Total Project Files**: 27 (+ product images)

## 📝 File Descriptions

### Core HTML Pages

| File | Purpose | Key Features |
|------|---------|--------------|
| `shop.html` | **Homepage** / Product listing | All 8 hoodies, main landing page |
| `product.html` | Product details | Image gallery, size/color selection, add to cart |
| `cart.html` | Shopping cart | View items, update quantities, remove items |
| `checkout.html` | Checkout form | Shipping info, crypto payment button |
| `success.html` | Order confirmation | Order details saved in localStorage |
| `cancel.html` | Payment cancelled | Return to checkout option |
| `index.html` | Legacy page | Replaced by shop.html as homepage |

### Information Pages

| File | Purpose | Content |
|------|---------|---------|
| `size-guide.html` | Sizing information | Measurements table, fit guide |
| `shipping.html` | Shipping details | Rates, delivery times, tracking |
| `returns.html` | Return policy | 30-day returns, exchange process |
| `privacy.html` | Privacy policy | Data collection, GDPR compliance |
| `terms.html` | Terms of service | Legal terms, liability, disclaimers |

### JavaScript Modules

| File | Purpose | Key Functions |
|------|---------|---------------|
| `security.js` | Security utilities | Input sanitization, XSS prevention, validation |
| `utils.js` | Helper functions | Formatting, validation, shipping calculation |
| `products.js` | Product catalog | 8 hoodies with variants, prices, details |
| `cart.js` | Cart management | Add/remove items, quantity updates, localStorage |
| `checkout.js` | Checkout logic | Form validation, Cloudflare Worker integration, crypto payment |

### CSS Files

| File | Purpose | Lines of Code |
|------|---------|---------------|
| `reset.css` | Browser normalization | ~150 lines |
| `main.css` | All styling | ~800 lines |

## 🔑 Key Features by File

### security.js
- sanitizeHTML()
- sanitizeText()
- sanitizeEmail()
- sanitizeNumber()
- validateVariant()
- sanitizeCart()
- safeLocalStorageGet/Set()

### utils.js
- formatPrice()
- isValidEmail()
- calculateShipping()
- showError/Success()
- generateOrderId()
- getCartItemCount()
- updateCartBadge()
- getCountriesList()

### products.js
- getAllProducts()
- getProductById()
- isValidVariant()
- getFeaturedProducts()
- Product catalog (8 hoodies)

### cart.js
- getCart()
- addItem()
- removeItem()
- updateQuantity()
- clearCart()
- getSubtotal()
- getSummary()
- validateCart()

### checkout.js
- validateForm()
- calculateTotals()
- createOrder()
- saveOrder()
- payWithCrypto() - Calls Cloudflare Worker
- prepareCryptoPayment()
- initCryptoButton()
- processCheckout()

## 🎨 Styling Structure (main.css)

### Sections
1. CSS Variables (colors, spacing, etc.)
2. Base styles (typography, layout)
3. Header & Navigation
4. Hero section
5. Buttons
6. Product grid & cards
7. Product detail page
8. Shopping cart
9. Forms & inputs
10. Messages & notifications
11. Loading indicators
12. Footer
13. Payment buttons
14. Info pages
15. Size guide table
16. Responsive breakpoints (tablet, desktop)
17. Accessibility
18. Print styles

## 📦 Dependencies

### External Services
- **Cloudflare Worker**: `https://create-coinbase-checkout.adheesharavindu001.workers.dev`
  - Used in: checkout.js
  - Purpose: Secure payment processing, Coinbase Commerce integration

- **Coinbase Commerce**: Payment provider for cryptocurrency
  - Accepts: Bitcoin, Ethereum, USDC, Litecoin, Bitcoin Cash, Dogecoin, etc.
  - Purpose: Cryptocurrency payment processing

### No Other Dependencies
- Pure vanilla JavaScript
- No npm packages
- No build process
- No frameworks (React, Vue, etc.)
- No jQuery or other libraries
- No card payment integrations

## 🔒 Security Files

### .htaccess Features
- Force HTTPS redirect
- Security headers (X-Frame-Options, CSP, etc.)
- GZIP compression
- Browser caching
- File protection
- Directory browsing disabled

## 📱 Mobile-First Design

All files use responsive design:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1200px+

## 🌍 Browser Support

All files tested on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📏 File Sizes (Approximate)

| File Type | Size Range |
|-----------|------------|
| HTML files | 5-15 KB each |
| CSS files | 10-30 KB each |
| JS files | 5-15 KB each |
| .htaccess | 3 KB |
| **Total (no images)** | **~180 KB** |

## 🖼️ Required Images (Not Included)

You need to provide **24 product images**:

### Per Product (3 images each):
1. Main product shot
2. Detail/texture shot
3. Model wearing product

### Products:
1. Classic Black Hoodie (3 images)
2. Minimalist Grey Hoodie (3 images)
3. Navy Blue Essential (3 images)
4. Forest Green Hoodie (3 images)
5. Burgundy Premium Hoodie (3 images)
6. White Essential Hoodie (3 images)
7. Charcoal Heavyweight (3 images)
8. Olive Tactical Hoodie (3 images)

**Total**: 24 images required

## 🚀 Upload Checklist

When uploading to hosting, ensure you upload:

- [x] All 13 HTML files (root of public_html)
- [x] css/ folder with 2 CSS files
- [x] js/ folder with 5 JavaScript files
- [ ] images/ folder (with your 24 product images)
- [x] .htaccess file (root of public_html)
- [x] Verify folder structure is preserved
- [x] Set permissions: directories 755, files 644

## 📋 Documentation Files

These files are for reference (don't upload to hosting):

- README.md - Main documentation
- QUICKSTART.md - Quick start guide (15 min setup)
- CONFIGURATION.md - Configuration checklist
- FTP-DEPLOYMENT.md - FTP upload guide
- MAINTENANCE.md - Troubleshooting & maintenance
- FILE-STRUCTURE.md - This file

---

**Total Lines of Code**: ~4,800 lines
**Development Time**: Professional-grade implementation
**Production Ready**: Yes ✅
**Site**: https://oncloth.shop
**Brand**: OnCloth

Last Updated: January 25, 2026
