# Maintenance & Troubleshooting Guide

Complete guide for maintaining and troubleshooting your OnCloth hoodie store.

**Site**: https://oncloth.shop  
**Support**: support@oncloth.shop  
**Orders**: orders@oncloth.shop

## 📅 Regular Maintenance Schedule

### Daily Tasks
- [ ] Check Coinbase Commerce dashboard for new orders
- [ ] Respond to customer inquiries at support@oncloth.shop
- [ ] Monitor website uptime (visit https://oncloth.shop)

### Weekly Tasks
- [ ] Process pending orders from Coinbase Commerce
- [ ] Send tracking numbers to customers at orders@oncloth.shop
- [ ] Backup website files via FTP
- [ ] Review error logs (if available in cPanel)

### Monthly Tasks
- [ ] Update product inventory in products.js
- [ ] Review and respond to customer feedback
- [ ] Check SSL certificate status in cPanel
- [ ] Review security settings
- [ ] Optimize images if needed
- [ ] Test crypto checkout flow with small payment

### Quarterly Tasks
- [ ] Review and update legal pages
- [ ] Update product descriptions/prices
- [ ] Analyze sales data
- [ ] Review shipping rates
- [ ] Update FAQ or add new info pages

### Annual Tasks
- [ ] Renew domain name
- [ ] Renew hosting plan
- [ ] Renew SSL certificate (if not auto-renewed)
- [ ] Complete security audit
- [ ] Review all documentation

---

## 🔧 Common Issues & Solutions

### Cart Issues

#### Problem: Cart not saving items
**Symptoms**: Items disappear when page refreshes
**Solutions**:
1. Check if localStorage is enabled in browser
2. Disable private/incognito mode
3. Clear browser cache and cookies
4. Check browser console for JavaScript errors
5. Verify security.js and cart.js are loading

**Test**: 
```javascript
// Open browser console and type:
localStorage.setItem('test', 'value');
localStorage.getItem('test'); // Should return 'value'
```

#### Problem: Cart shows wrong quantities
**Symptoms**: Incorrect item counts or prices
**Solutions**:
1. Clear cart: `localStorage.removeItem('cart')`
2. Check products.js for correct prices
3. Verify cart.js validation logic
4. Test add to cart with different quantities

#### Problem: Can't remove items from cart
**Symptoms**: Remove button doesn't work
**Solutions**:
1. Check browser console for errors
2. Verify cart.js is loaded
3. Test with different browsers
4. Clear localStorage and try again

---

### Payment Issues

#### Problem: Coinbase Commerce not loading
**Symptoms**: Crypto payment button does nothing
**Solutions**:
1. Verify Cloudflare Worker endpoint is accessible
2. Check browser console for errors
3. Ensure SSL is enabled (HTTPS required)
4. Verify Coinbase Commerce account is active
5. Test with different browsers
6. Check CSP headers allow worker connection

**Debug**:
```javascript
// Check if worker is accessible
fetch('https://create-coinbase-checkout.adheesharavindu001.workers.dev', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items: [], shipping: 10, currency: 'USD' })
}).then(r => r.json()).then(console.log);
```

#### Problem: Payment succeeds but no order confirmation
**Symptoms**: Payment completes, no success page
**Solutions**:
1. Verify redirect URLs in Coinbase Commerce dashboard
2. Check success.html exists and is accessible at https://oncloth.shop/success.html
3. Verify order is saved to localStorage before payment redirect
4. Test localStorage for lastOrder data
5. Clear browser cache and test again

**Debug**:
```javascript
// Check if lastOrder is saved
const lastOrder = localStorage.getItem('lastOrder');
console.log(JSON.parse(lastOrder));
```

---

### Image Issues

#### Problem: Images not loading
**Symptoms**: Broken image icons on product pages
**Solutions**:
1. Check image file names match products.js exactly
2. Verify images are uploaded to /images/ folder
3. Check file permissions (644 for images)
4. Test image URLs directly in browser
5. Clear browser cache

**Test image URL**:
```
https://oncloth.shop/images/classic-black-1.jpg
```

#### Problem: Images load slowly
**Symptoms**: Long loading times, poor performance
**Solutions**:
1. Optimize images (use TinyPNG, ImageOptim)
2. Reduce image file sizes (under 500KB)
3. Enable GZIP compression in .htaccess
4. Use WebP format (requires fallback)
5. Consider image CDN

---

### Checkout Issues

#### Problem: Form validation failing
**Symptoms**: Can't submit checkout form
**Solutions**:
1. Check all required fields are filled
2. Verify email format is correct
3. Check country is selected
4. Look for error messages on page
5. Check browser console

#### Problem: Shipping not calculating
**Symptoms**: Shipping shows $0.00
**Solutions**:
1. Verify country is selected in form
2. Check calculateShipping() in utils.js
3. Test with different countries
4. Check browser console for errors

#### Problem: Total price incorrect
**Symptoms**: Wrong subtotal or total amount
**Solutions**:
1. Verify product prices in products.js
2. Check cart item quantities
3. Verify shipping calculation
4. Clear cart and test again
5. Check checkout.js calculateTotals()

---

### CSS/Styling Issues

#### Problem: Website looks broken
**Symptoms**: No styling, plain HTML
**Solutions**:
1. Verify CSS files are uploaded
2. Check CSS file paths in HTML
3. Clear browser cache (Ctrl+Shift+R)
4. Check .htaccess isn't blocking CSS
5. Test in different browser

#### Problem: Mobile view broken
**Symptoms**: Not responsive on mobile
**Solutions**:
1. Check viewport meta tag in HTML
2. Test with browser dev tools mobile view
3. Verify main.css media queries
4. Clear mobile browser cache
5. Test on actual mobile device

#### Problem: Specific element not styled
**Symptoms**: One element looks wrong
**Solutions**:
1. Check browser dev tools (F12)
2. Inspect element for applied styles
3. Look for CSS conflicts
4. Verify class names match CSS
5. Check for typos in HTML/CSS

---

### SSL/HTTPS Issues

#### Problem: "Not Secure" warning
**Symptoms**: Browser shows security warning
**Solutions**:
1. Check SSL certificate is installed
2. Verify certificate hasn't expired
3. Enable AutoSSL in cPanel
4. Wait for certificate propagation
5. Check mixed content (HTTP resources)

#### Problem: Redirect loop
**Symptoms**: Page keeps redirecting
**Solutions**:
1. Check .htaccess redirect rules
2. Verify hosting supports HTTPS
3. Disable redirect temporarily
4. Check for conflicting redirects
5. Contact hosting support

---

### Performance Issues

#### Problem: Website loading slowly
**Symptoms**: Long page load times
**Solutions**:
1. Optimize images (compress, resize)
2. Enable GZIP in .htaccess
3. Enable browser caching
4. Minimize CSS/JS (production)
5. Use CDN for static files
6. Check hosting resources

#### Problem: JavaScript errors
**Symptoms**: Features not working
**Solutions**:
1. Open browser console (F12)
2. Note error messages
3. Check file paths are correct
4. Verify all JS files loaded
5. Test in different browser
6. Check for typos in code

---

## 🛠️ Debugging Tools

### Browser Developer Tools

**Chrome/Firefox/Edge**: Press `F12` or `Ctrl+Shift+I`

**Key Tabs**:
- **Console**: JavaScript errors and logs
- **Network**: File loading, failed requests
- **Application**: localStorage, cookies
- **Elements**: HTML structure, CSS

### Test JavaScript Functions

Open console and test:

```javascript
// Check products loaded
console.log(Products.getAllProducts());

// Check cart
console.log(Cart.getCart());

// Check cart functions
Cart.addItem(Products.getProductById('classic-black-hoodie'), 'M', 'Black', 1);

// Check shipping calculation
console.log(Utils.calculateShipping('United States'));

// Clear cart for testing
Cart.clearCart();
```

### Test localStorage

```javascript
// View cart
console.log(localStorage.getItem('cart'));

// Clear cart
localStorage.removeItem('cart');

// Check saved order
console.log(localStorage.getItem('currentOrder'));
```

---

## 📊 Monitoring & Analytics

### Order Tracking

**Setup spreadsheet with columns**:
- Order ID
- Date
- Customer Email
- Items
- Total
- Payment Method
- Status (Pending, Shipped, Delivered)
- Tracking Number

### Payment Monitoring

**Coinbase Commerce**:
- Dashboard: https://commerce.coinbase.com
- Check: Charges, payments, refunds
- Export: Transaction history

**PayHere**:
- Dashboard: https://www.payhere.lk/merchant
- Check: Transactions, settlements
- Export: Payment reports

---

## 🔐 Security Checklist

### Monthly Security Check

- [ ] SSL certificate is valid and active
- [ ] All software is up to date
- [ ] No suspicious files in hosting
- [ ] .htaccess security headers active
- [ ] Payment provider credentials secure
- [ ] FTP password is strong
- [ ] cPanel password is strong
- [ ] No unauthorized access logs

### If Website Hacked

1. **Immediately**:
   - Change all passwords (FTP, cPanel, email)
   - Backup current files (even if compromised)
   - Delete suspicious files
   - Restore from clean backup

2. **Investigation**:
   - Check file modification dates
   - Review access logs in cPanel
   - Scan for malware
   - Contact hosting support

3. **Recovery**:
   - Upload clean files
   - Update all passwords
   - Enable additional security
   - Monitor for 30 days

---

## 📧 Email Issues

### Not Receiving Order Notifications

**Check**:
1. Email configured in payment providers
2. Check spam/junk folders
3. Verify email address is correct
4. Test with different email provider
5. Contact payment provider support

### Customer Not Receiving Confirmation

**Steps**:
1. Verify email entered correctly at checkout
2. Ask customer to check spam folder
3. Manually send order confirmation
4. Keep customer informed of order status

---

## 🔄 Backup & Restore

### How to Backup

**Method 1: FTP Download**
1. Connect via FTP
2. Download entire public_html folder
3. Save with date: `backup-2026-01-23/`
4. Store in multiple locations

**Method 2: cPanel Backup**
1. Login to cPanel
2. Go to "Backup Wizard"
3. Select "Backup"
4. Download "Home Directory"

### How to Restore

1. Connect via FTP
2. Delete current files (BE CAREFUL!)
3. Upload backup files
4. Verify website works
5. Test all functionality

---

## 🆘 When to Contact Support

### Contact Hosting Support When:
- Website completely down
- SSL certificate issues
- Server errors (500, 502, 503)
- Disk space issues
- Email problems
- cPanel access issues

### Contact Payment Provider When:
- Payment not processing
- Refund issues
- Account verification problems
- API/integration issues
- Settlement problems

### Contact Developer When:
- Custom feature requests
- Code modifications needed
- Integration with other services
- Design changes
- Performance optimization

---

## 📞 Support Contacts

### Namecheap (Hosting & Domain)
- **Website**: https://www.namecheap.com/support/
- **Live Chat**: Available 24/7
- **Ticket**: Submit via account dashboard

### Coinbase Commerce (Payments)
- **Website**: https://commerce.coinbase.com/help
- **Email**: Via help center
- **Documentation**: https://commerce.coinbase.com/docs
- **Dashboard**: https://commerce.coinbase.com

### Cloudflare (Worker)
- **Dashboard**: https://dash.cloudflare.com
- **Workers**: https://workers.cloudflare.com
- **Documentation**: https://developers.cloudflare.com/workers/
- **Support**: https://support.cloudflare.com

### OnCloth Store
- **Customer Support**: support@oncloth.shop
- **Order Questions**: orders@oncloth.shop
- **Website**: https://oncloth.shop

---

## 📝 Maintenance Log Template

Keep a log of all maintenance activities:

```
Date: 2026-01-25
Action: Updated product images
Files Modified: images folder
Backup Taken: Yes
Tested: Yes
Notes: New images optimized and uploaded, crypto payment tested
```

---

**Last Updated**: January 25, 2026

Keep this guide handy for ongoing maintenance and troubleshooting!
