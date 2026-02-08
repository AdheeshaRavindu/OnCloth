# Quick Start Guide

Get your onCloth on-chain clothing store live in under 15 minutes.

## 🚀 Fast Track (Minimum Steps)

### 1. Configure Payment Endpoint (5 minutes)

You only need to:
1. Choose an on-chain payment provider or checkout service
2. Configure your backend/endpoint to return a checkout URL
3. Update the endpoint in `js/checkout.js`
4. Add the endpoint to `connect-src` in `checkout.html`
5. Set success and cancel URLs in your provider settings

### 2. Domain & Email

- Replace placeholder domains and emails in HTML
- Update support and order contact addresses

### 3. Deploy (5 minutes)

1. Choose any static hosting or server
2. Upload or deploy the project root contents
3. Verify HTML, CSS, JS, and images are served

### 4. Add Product Images (3 minutes)

1. Product images are already in `/images/`
2. If you want to use them, replace `generateImage(...)` in `js/products.js` with file paths (see `/images/README.md`)
3. Verify they load on the website

### 5. Enable HTTPS

- Ensure HTTPS is enabled in your deployment environment

### 6. Test (2 minutes)

- [ ] Visit your deployed URL
- [ ] Add item to cart
- [ ] Go to checkout
- [ ] Fill out shipping form
- [ ] Click "Pay with Crypto" (button label)
- [ ] Verify redirect to your payment provider
- [ ] Complete small test payment
- [ ] Verify success page shows order details

## ✅ You're Live!

Your store is now accepting on-chain payments.

---

## 📋 Detailed Setup (Full Guide)

For comprehensive setup instructions, see:
- **[README.md](README.md)** - Complete overview
- **[CONFIGURATION.md](CONFIGURATION.md)** - Full checklist
- **[Deployment guide](DEPLOYMENT.md)** - Hosting-agnostic deployment steps

## 🎯 Critical Configuration Points

### Must Verify Before Launch:

1. **Checkout Endpoint**
   - Endpoint configured in checkout.js
   - Handles payment creation securely

2. **Payment Provider**
   - Account created and verified
   - API key configured on your backend
   - Email notifications enabled

3. **HTTPS**
   - Enabled for your domain

4. **Product Images (Optional)**
   - 36 images available (3 per sample item)
   - Correct file names
   - Optimized for web (under 500KB each)

5. **Email Accounts**
   - support@yourdomain.example configured
   - orders@yourdomain.example configured

6. **Homepage**
   - shop.html is the main landing page
   - All navigation links updated
   - index.html is legacy (can be removed)

## 🔧 Common Issues & Quick Fixes

### Images Not Loading
```
Problem: Broken image icons
Fix: Check file names match products.js exactly (case-sensitive)
```

### Cart Not Working
```
Problem: Items don't add to cart
Fix: Enable localStorage in browser, disable private mode
```

### Payment Not Processing
```
Problem: Payment button does nothing
Fix: 1) Check browser console for errors
   2) Verify your checkout endpoint is accessible
   3) Test with small payment amount
   4) Ensure your payment provider account is active
```

### SSL Not Working
```
Problem: Not secure warning  
Fix: Ensure HTTPS is enabled and clear browser cache.
```

### Optional but Recommended:

5. **Domain Configuration**
   - Update placeholder URLs
   - Configure DNS properly

6. **Legal Pages**
   - Review privacy policy
   - Review terms of service
   - Customize for your jurisdiction

## 🔧 Common Issues & Quick Fixes

### Images Not Loading
```
Problem: Broken image icons
Fix: Check file names match products.js exactly (case-sensitive)
```

### Cart Not Working
```
Problem: Items don't add to cart
Fix: Enable localStorage in browser, disable private mode
```

### Payment Not Processing
```
Problem: Payment button does nothing
Fix: Check browser console for errors, verify credentials
```

### SSL Not Working
```
Problem: Not secure warning
Fix: Verify your HTTPS configuration and certificate status
```


## 📞 Support Resources

- **Payment Provider Docs**: See your provider documentation
- **Deployment Docs**: See your hosting/deployment platform docs

## 💡 Pro Tips

1. **Test with Small Payment First**
   - Send a small on-chain payment
   - Verify entire flow works
   - Then promote to customers

2. **Backup Everything**
   - Download files before changes
   - Keep local copies
   - Use version control (Git)

3. **Monitor First Orders**
   - Check your payment provider dashboard
   - Verify order details in localStorage
   - Process orders promptly
   - Send tracking to orders@yourdomain.example

4. **Mobile Testing**
   - Test on actual mobile devices
   - Check responsive design
   - Verify payment flow on mobile
   - Ensure touch targets are adequate

5. **Performance**
   - Optimize images before upload (under 500KB)
   - Enable browser caching via your hosting settings

## 📊 Order Management

On-chain checkout workflow:

1. **Receive payment notification** from your provider
2. **Check provider dashboard** for payment details
3. **Customer saved order info** on success page (screenshot)
4. **Email customer** at orders@yourdomain.example for any clarifications
5. **Fulfill order** from inventory
6. **Ship and send tracking** to customer
7. **Keep records** in spreadsheet or system

## 🔄 Regular Maintenance

**Daily:**
- Check payment provider for new orders
- Respond to customer emails (support@yourdomain.example)
- Monitor website uptime

**Weekly:**
- Process pending orders
- Send tracking numbers to customers
- Backup website files

**Monthly:**
- Review and update product inventory
- Check SSL certificate status
- Test checkout flow

**Quarterly:**
- Review and update content
- Update legal pages if needed
- Review shipping rates
- Check your backend logs

---

**Ready to launch your on-chain apparel store? Let's go! 🚀**

Last Updated: January 25, 2026
