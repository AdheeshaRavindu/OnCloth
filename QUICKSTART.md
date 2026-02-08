# Quick Start Guide

Get your OnCloth hoodie store live in under 15 minutes.

## 🚀 Fast Track (Minimum Steps)

### 1. Configure Coinbase Commerce (5 minutes)

**The Cloudflare Worker is already deployed and configured.**

Worker Endpoint: `https://create-coinbase-checkout.adheesharavindu001.workers.dev`

You only need to:
1. Create Coinbase Commerce account at https://commerce.coinbase.com
2. Generate API key in dashboard
3. Configure worker with your API key (if using your own worker)
4. Set success URL to: `https://oncloth.shop/success.html`
5. Set cancel URL to: `https://oncloth.shop/cancel.html`

**No changes needed in checkout.js** - it's already configured to use the worker.

### 2. Domain & Email (Already Configured)

- **Domain**: https://oncloth.shop ✅
- **Support Email**: support@oncloth.shop ✅
- **Orders Email**: orders@oncloth.shop ✅

All HTML files are already updated with correct domain and emails.

### 3. Upload via FTP (5 minutes)

1. Connect to FTP: `ftp.oncloth.shop` (or via Namecheap cPanel)
2. Navigate to `public_html`
3. Upload all files from local `public_html` folder
4. Set permissions: Directories 755, Files 644

### 4. Add Product Images (3 minutes)

1. Prepare 24 images (3 per hoodie, 600x600px minimum)
2. Name according to `/images/README.md`
3. Upload to `/images/` folder
4. Verify they load on website

### 5. Enable SSL (Already Done)

- SSL is already installed and active
- HTTPS enforced via .htaccess
- Site accessible at: https://oncloth.shop

### 6. Test (2 minutes)

- [ ] Visit https://oncloth.shop
- [ ] Add item to cart
- [ ] Go to checkout
- [ ] Fill out shipping form
- [ ] Click "Pay with Crypto"
- [ ] Verify redirect to Coinbase Commerce
- [ ] Complete small test payment
- [ ] Verify success page shows order details

## ✅ You're Live!

Your store is now accepting cryptocurrency payments.

---

## 📋 Detailed Setup (Full Guide)

For comprehensive setup instructions, see:
- **[README.md](README.md)** - Complete overview
- **[CONFIGURATION.md](CONFIGURATION.md)** - Full checklist
- **[FTP-DEPLOYMENT.md](FTP-DEPLOYMENT.md)** - Detailed FTP guide

## 🎯 Critical Configuration Points

### Must Verify Before Launch:

1. **Cloudflare Worker**
   - Endpoint: `https://create-coinbase-checkout.adheesharavindu001.workers.dev`
   - Already integrated in checkout.js
   - Handles payment creation securely

2. **Coinbase Commerce**
   - Account created and verified
   - API key configured in worker
   - Email notifications enabled

3. **SSL Certificate**
   - Already installed and active
   - HTTPS enforced
   - Site: https://oncloth.shop

4. **Product Images**
   - All 24 images uploaded
   - Correct file names
   - Optimized for web (under 500KB each)

5. **Email Accounts**
   - support@oncloth.shop configured
   - orders@oncloth.shop configured
   - Forwarding set up in hosting panel

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
     2) Verify Cloudflare Worker is accessible
     3) Test with small payment amount
     4) Ensure Coinbase Commerce account is active
```

### SSL Not Working
```
Problem: Not secure warning  
Fix: SSL is already configured. Clear browser cache.
```

### Optional but Recommended:

5. **Domain Configuration**
   - Update all hardcoded URLs
   - Set up email forwarding
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
Fix: Wait for AutoSSL to complete, check cPanel SSL status
```

### .htaccess Causes 500 Error
```
Problem: Website shows 500 Internal Server Error
Fix: Remove .htaccess temporarily, add rules one by one
```

## 📞 Support Resources

- **Namecheap Support**: https://www.namecheap.com/support/
- **Coinbase Commerce**: https://commerce.coinbase.com/help
- **Cloudflare Workers**: https://developers.cloudflare.com/workers/
- **FileZilla Help**: https://wiki.filezilla-project.org/
- **OnCloth Support**: support@oncloth.shop

## 💡 Pro Tips

1. **Test with Small Payment First**
   - Send $1-5 in crypto
   - Verify entire flow works
   - Then promote to customers

2. **Backup Everything**
   - Download files before changes
   - Keep local copies
   - Use version control (Git)

3. **Monitor First Orders**
   - Check Coinbase Commerce dashboard
   - Verify order details in localStorage
   - Process orders promptly
   - Send tracking to orders@oncloth.shop

4. **Mobile Testing**
   - Test on actual mobile devices
   - Check responsive design
   - Verify payment flow on mobile
   - Ensure touch targets are adequate

5. **Performance**
   - Optimize images before upload (under 500KB)
   - Images are already optimized with modern formats
   - Enable browser caching via .htaccess

## 📊 Order Management

Crypto-only frontend workflow:

1. **Receive payment notification** from Coinbase Commerce
2. **Check Coinbase dashboard** for payment details
3. **Customer saved order info** on success page (screenshot)
4. **Email customer** at orders@oncloth.shop for any clarifications
5. **Fulfill order** from inventory
6. **Ship and send tracking** to customer
7. **Keep records** in spreadsheet or system

## 🔄 Regular Maintenance

**Daily:**
- Check Coinbase Commerce for new orders
- Respond to customer emails (support@oncloth.shop)
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
- Check Cloudflare Worker logs

---

**Ready to sell hoodies with crypto? Let's go! 🚀**

Last Updated: January 25, 2026
