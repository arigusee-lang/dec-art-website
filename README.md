# Dec'Art Website - Ukrainian Version

Website for Dec'Art curtains and blinds company, fully translated to Ukrainian.

## ?? Live Site
- **Production URL**: https://my-personal-221111.web.app
- **Firebase Project**: my-personal-221111

## ?? Deployment

Deploy to Firebase Hosting:
```bash
firebase deploy
```

## ? Performance Optimizations Applied

### Current Optimizations:
1. **Browser Caching** - Images and static assets cached for 1 year
2. **HTML Caching** - HTML files cached for 1 hour with revalidation
3. **Security Headers** - Added X-Content-Type-Options and X-Frame-Options

### ?? Recommended Further Optimizations:

#### 1. Image Optimization (High Priority)
Your site has 600+ images totaling ~60MB. This is the main performance bottleneck.

**Solutions:**
- Convert images to WebP format (70% smaller)
- Use responsive images with srcset
- Implement lazy loading for gallery images
- Compress existing JPGs (use tools like ImageOptim or TinyPNG)

**Quick Win:**
```bash
# Install imagemin-cli
npm install -g imagemin-cli imagemin-webp

# Convert images to WebP
imagemin img/gallery/**/*.jpg --plugin=webp --out-dir=img/gallery-webp
```

#### 2. Minify CSS/JS
- Minify jQuery and other JavaScript files
- Combine multiple CSS files
- Remove unused CSS

#### 3. Enable Compression
Firebase Hosting automatically compresses files, but ensure:
- All text files (HTML, CSS, JS) are served compressed
- Use Brotli compression where possible

#### 4. Lazy Load Images
Add lazy loading to gallery images:
```html
<img src="image.jpg" loading="lazy" alt="description">
```

#### 5. Reduce HTTP Requests
- Combine multiple small images into CSS sprites
- Use icon fonts instead of image icons
- Inline critical CSS

## ?? Current Performance Metrics

**Issues:**
- ~1,067 files deployed
- Large image files (not optimized)
- No lazy loading
- Synchronous script loading

**Expected Load Time:**
- First visit: 5-10 seconds (depending on connection)
- Cached visit: 1-2 seconds

## ?? Firebase Hosting Features

Your site uses Firebase Hosting which includes:
- ? Global CDN (Content Delivery Network)
- ? Automatic SSL certificate
- ? HTTP/2 support
- ? Automatic compression (gzip/brotli)
- ? Free tier: 10GB storage, 360MB/day bandwidth

## ?? Monitoring

View your site's performance:
1. **Firebase Console**: https://console.firebase.google.com/project/my-personal-221111/hosting
2. **Google PageSpeed Insights**: https://pagespeed.web.dev/
3. **GTmetrix**: https://gtmetrix.com/

## ??? Tech Stack

- Static HTML/CSS/JavaScript
- jQuery 1.4.2
- Firebase Hosting
- Windows-1251 charset (Cyrillic support)

## ?? Translation Status

All content translated from Russian to Ukrainian:
- ? Navigation menus
- ? Product pages
- ? Gallery descriptions
- ? Contact forms
- ? Meta descriptions

## ?? Repository

GitHub: https://github.com/arigusee-lang/dec-art-website

## ?? Cost Considerations

**Current (Free Tier):**
- Storage: Free up to 10GB
- Bandwidth: Free up to 360MB/day
- Custom domain: Free

**If you exceed free tier:**
- Storage: $0.026/GB/month
- Bandwidth: $0.15/GB

**Estimated monthly cost with moderate traffic:**
- ~1,000 visitors/month: FREE
- ~10,000 visitors/month: $5-10/month
- ~100,000 visitors/month: $50-100/month

## ?? Next Steps for Better Performance

1. **Immediate** (Do this now):
   - ? Caching headers configured
   - Add lazy loading to images
   - Compress existing images

2. **Short-term** (This week):
   - Convert images to WebP
   - Minify CSS/JS files
   - Implement responsive images

3. **Long-term** (Future):
   - Consider moving to a static site generator
   - Implement a build process
   - Add service worker for offline support
