# Configuration Checklist

Use this checklist to configure your onCloth on-chain clothing store for production deployment.

## ✅ Required Configurations

### 1. Payment Provider Setup

#### Checkout Endpoint + Payment Provider (On-Chain Payments)

- [ ] Payment provider account created
- [ ] API key stored on your backend
- [ ] Checkout endpoint configured in `js/checkout.js`
- [ ] Endpoint allowed in `checkout.html` CSP `connect-src`
- [ ] Success redirect URL set to: `https://yourdomain.example/success.html`
- [ ] Cancel redirect URL set to: `https://yourdomain.example/cancel.html`
- [ ] Tested checkout with small payment amount
- [ ] Verified payment notifications are received

**Note**: The frontend (`checkout.js`) is already configured to use the worker. No code changes needed.

### 2. Domain and Email Configuration

- [ ] Domain configured: https://yourdomain.example
- [ ] Support email: support@yourdomain.example
- [ ] Orders email: orders@yourdomain.example
- [ ] All HTML files updated with correct domain
- [ ] All contact sections updated with correct emails
- [ ] Open Graph URLs updated

### 3. TLS/HTTPS

- [ ] Domain pointed to your deployment environment
- [ ] HTTPS enabled and tested
- [ ] HTTP to HTTPS redirect configured
- [ ] Mixed content warnings resolved

### 4. Product Images

- [x] Product images exist in `/images/`
- [ ] Named images according to `/images/README.md` specifications
- [ ] Update `js/products.js` to use file paths instead of generated SVGs (optional)
- [ ] Uploaded all images to `/images/` folder
- [ ] Verified image file permissions (644)
- [ ] Tested image loading on all product pages
- [ ] Optimized images for web (under 500KB each)

### 5. Content Customization

- [ ] Updated brand name to "onCloth" in header (all pages)
- [x] Set shop.html as homepage
- [x] Updated product descriptions in `js/products.js`
- [x] Verified pricing is correct
- [x] Updated shipping rates in `js/utils.js`
- [x] Reviewed size chart in `size-guide.html`

### 6. Legal Pages

- [x] Reviewed and customized `privacy.html` (on-chain payments)
- [x] Reviewed and customized `terms.html` (on-chain payments)
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
- [ ] On-chain payment button works
- [ ] Checkout endpoint responds correctly
- [ ] Order data saves to localStorage before redirect

### Payment Testing
- [ ] Payment provider checkout opens via endpoint
- [ ] Can select a payment asset/network in your provider UI
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

### Payment Provider Notifications
- [ ] Configured email notifications in provider dashboard
- [ ] Set notification email to orders@yourdomain.example
- [ ] Tested receiving payment confirmations
- [ ] Created email templates for customer communications
- [ ] Set up email forwarding as needed

## 📊 Order Management

- [ ] Created system for tracking orders (spreadsheet or tool)
- [ ] Documented order fulfillment process
- [ ] Set up shipping materials/supplies
- [ ] Arranged courier service agreements
- [ ] Created email template for shipping confirmations sent to orders@yourdomain.example
- [ ] Created email template for tracking numbers

## 🚀 Pre-Launch Final Checks

- [ ] All configuration items above completed
- [ ] All testing items above passed
- [ ] Backup of all files created
- [ ] Deployment credentials saved securely
- [ ] Payment provider API credentials saved securely
- [ ] Domain registrar login saved
- [ ] SSL certificate expiration date noted
- [ ] Calendar reminders set for renewals

## 📈 Post-Launch

- [ ] Monitor first few orders closely
- [ ] Verify payment notifications arrive at orders@yourdomain.example
- [ ] Test actual fulfillment process
- [ ] Respond to customer emails at support@yourdomain.example
- [ ] Gather customer feedback
- [ ] Address any issues promptly
- [ ] Consider adding analytics (if needed)

## 🆘 Emergency Contacts

- Your domain registrar support
- Your hosting/deployment support
- Your payment provider support

---

**Last Updated**: January 25, 2026

Keep this checklist for reference during setup and troubleshooting.
