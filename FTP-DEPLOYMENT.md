# FTP Deployment Guide

Step-by-step guide for uploading your OnCloth hoodie store to Namecheap shared hosting via FTP.

**Site**: https://oncloth.shop

## Prerequisites

- Namecheap shared hosting account
- Domain name pointed to hosting (oncloth.shop already configured)
- FTP client installed (FileZilla recommended)
- Your FTP credentials from Namecheap cPanel

## Step 1: Get FTP Credentials

1. **Login to Namecheap**
2. **Go to cPanel** for your hosting account
3. **Find FTP Accounts** section
4. **Note your credentials**:
   - **FTP Server**: Usually `ftp.oncloth.shop` or your hosting IP
   - **Username**: Usually your cPanel username
   - **Password**: Your cPanel password or FTP account password
   - **Port**: 21 (FTP) or 22 (SFTP/SSH)

## Step 2: Install FTP Client

### Option A: FileZilla (Recommended)
1. Download from: https://filezilla-project.org/
2. Install for your operating system
3. Launch FileZilla

### Option B: Other FTP Clients
- **Windows**: WinSCP, Cyberduck
- **Mac**: Cyberduck, Transmit
- **Web**: cPanel File Manager (built-in)

## Step 3: Connect to Your Hosting

### Using FileZilla:

1. **Open FileZilla**

2. **Enter connection details** at the top:
   - **Host**: `ftp.oncloth.shop` or hosting IP
   - **Username**: Your FTP username
   - **Password**: Your FTP password
   - **Port**: 21 (or leave blank)

3. **Click "Quickconnect"**

4. **Trust certificate** if prompted (for FTPS)

5. **Verify connection**:
   - Left panel: Your local computer files
   - Right panel: Your hosting server files

## Step 4: Navigate to public_html

1. **On the server side (right panel)**, double-click folders to navigate
2. **Find and open** the `public_html` directory
   - This is your website's root folder
   - All files here are publicly accessible

3. **If public_html contains files**:
   - Backup existing files if needed
   - You may need to clear it first (be careful!)

## Step 5: Upload Files

### Method 1: Drag and Drop (Recommended)

1. **On your computer (left panel)**:
   - Navigate to: `x:\GitHub\Project\hoodie-store\public_html`

2. **Select all files and folders**:
   - `index.html`, `shop.html`, etc. (all HTML files)
   - `css` folder
   - `js` folder
   - `images` folder
   - `.htaccess` file

3. **Drag selected files** to the right panel (server's public_html)

4. **Wait for upload** to complete:
   - FileZilla shows progress at bottom
   - Don't close FileZilla during upload

### Method 2: Right-Click Upload

1. **Select files** on left panel
2. **Right-click** → **Upload**
3. **Confirm** if prompted about existing files

## Step 6: Verify Upload

### Check File Structure:

Your `public_html` directory should now contain:

```
public_html/
├── .htaccess
├── index.html
├── shop.html
├── product.html
├── cart.html
├── checkout.html
├── success.html
├── cancel.html
├── size-guide.html
├── shipping.html
├── returns.html
├── privacy.html
├── terms.html
├── css/
│   ├── reset.css
│   └── main.css
├── js/
│   ├── security.js
│   ├── utils.js
│   ├── products.js
│   ├── cart.js
│   └── checkout.js
└── images/
    └── (your product images)
```

### Verify in FileZilla:
- Right panel shows all files
- Folder structure is preserved
- File sizes match your local files

## Step 7: Set File Permissions

FileZilla makes this easy:

1. **Right-click on public_html folder**
2. **Select "File permissions..."**
3. **Set permissions**:
   - **Directories**: 755 (rwxr-xr-x)
   - **Files**: 644 (rw-r--r--)

4. **Check "Recurse into subdirectories"**
5. **Apply to**: "Files and directories"
6. **Click OK**

### Or set individually:
- Right-click each file/folder → "File permissions..."
- Directories: Check: Read, Write, Execute for owner; Read, Execute for group and public
- Files: Check: Read, Write for owner; Read for group and public

## Step 8: Upload Product Images

1. **Prepare your images** on local computer
   - Follow naming conventions in `/images/README.md`
   - Optimize images (under 500KB each)

2. **Navigate to images folder** on server (right panel)

3. **Upload images**:
   - Drag image files from left to right panel
   - Or right-click images → Upload

4. **Verify images uploaded**:
   - Check file sizes
   - Verify file names match `products.js`

## Step 9: Test Your Website

1. **Open your browser**
2. **Visit**: `https://yourdomain.com`
3. **Test functionality**:
   - All pages load
   - Images display
   - Navigation works
   - Shopping flow works

4. **Check for errors**:
   - Open browser Developer Tools (F12)
   - Check Console for JavaScript errors
   - Check Network tab for failed requests

## Troubleshooting

### Files Not Uploading
- **Check disk space** in cPanel
- **Verify FTP credentials** are correct
- **Try SFTP (port 22)** instead of FTP
- **Check file permissions** on server

### .htaccess Not Visible
- In FileZilla: **View** → **Show hidden files**
- Ensure it's named exactly `.htaccess` (with leading dot)
- Check it uploaded to root of public_html

### Images Not Loading
- **Verify file paths** in products.js
- **Check file names** match exactly (case-sensitive)
- **Verify file permissions** (644 for images)
- **Test image URLs** directly in browser

### Website Shows 404 Error
- **Check index.html** is in public_html root
- **Verify domain** is pointed to hosting
- **Wait for DNS propagation** (up to 48 hours)
- **Clear browser cache**

### CSS/JS Not Loading
- **Check file paths** are correct
- **Verify folder structure** is preserved
- **Check file permissions** (644 for files)
- **Clear browser cache** (Ctrl+Shift+R)

### Permission Denied Errors
- **Set correct file permissions**:
  - Directories: 755
  - Files: 644
- **Check directory ownership** in cPanel

## FTP Best Practices

### Security:
- ✅ Use SFTP (port 22) instead of FTP when possible
- ✅ Use strong passwords
- ✅ Disconnect when not uploading
- ✅ Don't share FTP credentials

### Efficiency:
- ✅ Upload entire folders at once
- ✅ Use "Synchronized Browsing" feature in FileZilla
- ✅ Queue multiple uploads
- ✅ Resume failed transfers

### Backup:
- ✅ Keep local backup of all files
- ✅ Download server files before major updates
- ✅ Use version control (Git) for tracking changes

## Updating Your Website

### To update a single file:
1. Edit file locally
2. Connect via FTP
3. Upload only the changed file
4. Overwrite existing file on server

### To update multiple files:
1. Make changes locally
2. Connect via FTP
3. Select changed files
4. Upload and overwrite

### To update product images:
1. Add new images to local `/images/` folder
2. Update `products.js` with new references
3. Upload new images via FTP
4. Upload updated `products.js`

## Alternative: cPanel File Manager

If FTP client doesn't work:

1. **Login to cPanel**
2. **Open "File Manager"**
3. **Navigate to public_html**
4. **Click "Upload"** button
5. **Drag files** or click to select
6. **Wait for upload** to complete
7. **Extract zip files** if needed (right-click → Extract)

## Quick Reference

### Common FileZilla Shortcuts:
- **F5**: Refresh directory listing
- **Ctrl+R**: Reconnect to server
- **Ctrl+U**: Upload selected files
- **Ctrl+D**: Download selected files

### FTP Status Codes:
- **200**: Command okay
- **226**: Transfer complete
- **550**: File not found / No permission

---

**Need Help?**
- Namecheap Support: https://www.namecheap.com/support/
- FileZilla Documentation: https://wiki.filezilla-project.org/
- cPanel Video Tutorials: Search "cPanel File Manager tutorial"

**Last Updated**: January 23, 2026
