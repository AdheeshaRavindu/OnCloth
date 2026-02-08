# Configuration Checklist

Use this checklist to configure your OnCloth hoodie store for production deployment.

## ✅ Required Configurations

### 1. Payment Provider Setup

#### Cloudflare Worker + Coinbase Commerce (Cryptocurrency Only)

- [x] Cloudflare Worker deployed at: `https://create-coinbase-checkout.adheesharavindu001.workers.dev`
- [ ] Coinbase Commerce account created at https://commerce.coinbase.com
- [ ] API key generated in Coinbase Commerce dashboard
- [ ] Worker configured with Coinbase Commerce API key
- [ ] Success redirect URL set to: `https://oncloth.shop/success.html`
- [ ] Cancel redirect URL set to: `https://oncloth.shop/cancel.html`
- [ ] Tested checkout with small payment amount
- [ ] Verified payment notifications are received

**Note**: The frontend (`checkout.js`) is already configured to use the worker. No code changes needed.

### 2. Domain and Email Configuration

- [x] Domain configured: https://oncloth.shop
- [x] Support email: support@oncloth.shop
- [x] Orders email: orders@oncloth.shop
- [x] All HTML files updated with correct domain
- [x] All contact sections updated with correct emails
- [x] Open Graph URLs updated
- [ ] Email forwarding/accounts set up in hosting control panel

### 3. SSL Certificate

- [ ] Domain pointed to hosting (nameservers or A record)
- [ ] SSL certificate installed via cPanel
- [ ] HTTPS enabled and tested
- [ ] HTTP to HTTPS redirect configured
- [ ] Mixed content warnings resolved

### 4. Product Images

- [ ] Prepared product images (600x600px minimum)
- [ ] Named images according to `/images/README.md` specifications
- [ ] Uploaded all images to `/images/` folder via FTP
- [ ] Verified image file permissions (644)
- [ ] Tested image loading on all product pages
- [ ] Optimized images for web (under 500KB each)

### 5. Content Customization

- [x] Updated brand name to "OnCloth" in header (all pages)
- [x] Set shop.html as homepage
- [x] Updated product descriptions in `js/products.js`
- [x] Verified pricing is correct
- [x] Updated shipping rates in `js/utils.js`
- [x] Reviewed size chart in `size-guide.html`

### 6. Legal Pages

- [x] Reviewed and customized `privacy.html` (crypto-only payments)
- [x] Reviewed and customized `terms.html` (crypto-only payments)
- [x] Updated return policy in `returns.html`
- [x] Updated shipping information in `shipping.html`
- [ ] Added business entity name/address (if required by law)
- [ ] Consulted with legal counsel if needed

## 🧪 Testing Checklist

### Basic Functionality
- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Footer links work
- [ ] Images load properly
- [ ] No console errors in browser developer tools

### Shopping Flow
- [ ] Can browse products on shop page
- [ ] Can view individual product details
- [ ] Size and color selection works
- [ ] "Add to Cart" button enables after selections
- [ ] Items add to cart successfully
- [ ] Cart badge updates correctly
- [ ] Cart page displays items correctly
- [ ] Can update quantities in cart
- [ ] Can remove items from cart
- [ ] Cart persists after page refresh

### Checkout Process
- [ ] Checkout page loads with cart items
- [ ] Shipping form validates inputs
- [ ] Country selection works
- [ ] Shipping cost calculates correctly
- [ ] Order summary displays accurate totals
- [ ] Crypto payment button works
- [ ] Cloudflare Worker endpoint responds correctly
- [ ] Order data saves to localStorage before redirect

### Payment Testing
- [ ] Coinbase Commerce checkout opens via worker
- [ ] Can select cryptocurrency (Bitcoin, Ethereum, USDC, etc.)
- [ ] Payment processes successfully
- [ ] Redirects to success page after payment
- [ ] Cancel button redirects to cancel page
- [ ] Order details display on success page
- [ ] LastOrder data saved correctly in localStorage

### Mobile Responsiveness
- [ ] All pages display correctly on mobile
- [ ] Navigation menu works on mobile
- [ ] Product images scale properly
- [ ] Forms are usable on mobile
- [ ] Buttons are tap-friendly
- [ ] Text is readable without zooming
- [ ] Tested on iOS Safari
- [ ] Tested on Android Chrome

### Cross-Browser Testing
- [ ] Chrome (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (desktop)
- [ ] Edge (desktop)
- [ ] Mobile browsers

### Security
- [ ] HTTPS is enforced
- [ ] CSP headers are in place
- [ ] No mixed content warnings
- [ ] No XSS vulnerabilities detected
- [ ] Input sanitization tested
- [ ] LocalStorage data validated

## 📧 Email Notification Setup

### Coinbase Commerce Notifications
- [ ] Configured email notifications in Coinbase Commerce dashboard
- [ ] Set notification email to orders@oncloth.shop
- [ ] Tested receiving payment confirmations
- [ ] Created email templates for customer communications
- [ ] Set up email forwarding if using hosting email

## 📊 Order Management

- [ ] Created system for tracking orders (spreadsheet or tool)
- [ ] Documented order fulfillment process
- [ ] Set up shipping materials/supplies
- [ ] Arranged courier service agreements
- [ ] Created email template for shipping confirmations sent to orders@oncloth.shop
- [ ] Created email template for tracking numbers

## 🚀 Pre-Launch Final Checks

- [ ] All configuration items above completed
- [ ] All testing items above passed
- [ ] Backup of all files created
- [ ] FTP credentials saved securely
- [ ] Coinbase Commerce API credentials saved securely
- [ ] Cloudflare Worker access saved
- [ ] Domain registrar login saved
- [ ] Hosting cPanel login saved
- [ ] SSL certificate expiration date noted
- [ ] Calendar reminders set for renewals

## 📈 Post-Launch

- [ ] Monitor first few orders closely
- [ ] Verify payment notifications arrive at orders@oncloth.shop
- [ ] Test actual fulfillment process
- [ ] Respond to customer emails at support@oncloth.shop
- [ ] Gather customer feedback
- [ ] Address any issues promptly
- [ ] Consider adding analytics (if needed)

## 🆘 Emergency Contacts

**Domain Registrar & Hosting**: Namecheap
- Website: https://www.namecheap.com
- Support: https://www.namecheap.com/support/
- cPanel URL: Via Namecheap dashboard

**Coinbase Commerce**
- Dashboard: https://commerce.coinbase.com
- Support: https://commerce.coinbase.com/help
- API Documentation: https://commerce.coinbase.com/docs/

**Cloudflare**
- Dashboard: https://dash.cloudflare.com
- Workers: https://workers.cloudflare.com
- Support: https://support.cloudflare.com

---

**Last Updated**: January 25, 2026

Keep this checklist for reference during setup and troubleshooting.
