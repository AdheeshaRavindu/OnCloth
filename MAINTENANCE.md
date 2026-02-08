# Maintenance & Troubleshooting Guide

A vendor-neutral guide for maintaining and troubleshooting the onCloth on-chain clothing store.

**Site**: https://yourdomain.example  
**Support**: support@yourdomain.example  
**Orders**: orders@yourdomain.example

## Regular Maintenance

### Daily
- Check your payment provider dashboard for new orders
- Respond to customer inquiries
- Monitor uptime and error logs

### Weekly
- Process pending orders and send tracking
- Back up the deployed site (export or download)
- Review client-side error reports

### Monthly
- Review product catalog and pricing
- Verify HTTPS and CSP settings
- Optimize images if needed
- Test the checkout flow end-to-end

### Quarterly
- Review legal pages and policies
- Audit shipping rates and tax logic
- Update content and imagery

### Annually
- Renew domain and certificates (if applicable)
- Perform a security review
- Archive old orders and logs

---

## Common Issues & Fixes

### Cart Issues

**Problem**: Cart not saving items
- Ensure localStorage is enabled
- Avoid private/incognito mode
- Check browser console for errors

**Quick test**:
```javascript
localStorage.setItem('test', 'value');
localStorage.getItem('test');
```

**Problem**: Cart shows wrong quantities
- Clear cart: `localStorage.removeItem('cart')`
- Verify product prices in `js/products.js`

---

### Payment Issues

**Problem**: Payment button does nothing
- Verify your checkout endpoint is reachable
- Check console errors and CSP `connect-src`
- Ensure HTTPS is enabled
- Confirm your payment provider account is active

**Endpoint test**:
```javascript
fetch('https://your-checkout-endpoint.example', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ items: [], shipping: 10, currency: 'USD' })
}).then(r => r.json()).then(console.log);
```

**Problem**: Payment succeeds but no order confirmation
- Verify provider redirect URLs
- Confirm `success.html` is reachable
- Check `localStorage.getItem('lastOrder')`

---

### Image Issues

**Problem**: Images not loading
- Ensure `js/products.js` references `/images/...`
- Verify file names and paths
- Confirm the files are deployed

**Test image URL**:
```
https://yourdomain.example/images/sample-image.jpg
```

---

### Checkout Issues

**Problem**: Form validation failing
- Fill all required fields
- Verify email format and country selection

**Problem**: Shipping not calculating
- Verify country selection
- Check `calculateShipping()` in `js/utils.js`

---

### Styling Issues

**Problem**: Site is unstyled
- Ensure `css/` assets are served correctly
- Clear browser cache

---

### HTTPS Issues

**Problem**: "Not Secure" warning
- Ensure HTTPS is enabled for your domain
- Verify certificate validity

---

## Backup & Restore

**Backup**:
- Export or download the site root from your hosting provider
- Store backups with timestamps

**Restore**:
- Upload backup files to your deployment environment
- Verify functionality

---

## Support Contacts

- Deployment/hosting support (your provider)
- Payment provider support
- Domain registrar support

---

**Last Updated**: February 9, 2026
