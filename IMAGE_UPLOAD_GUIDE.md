# 📸 Image Upload Guide - Vercel Blob Storage

## Overview

This guide will help you upload your project screenshots to Vercel Blob Storage so they display on your portfolio.

## 🎯 Images You Need to Upload

### 1. **SSC Railtec Database** (4 images)
```
produktdatenbank_produkt.png         ← Main (with full menu bar)
produktdatenbank_konfigurationen.png ← Excerpt (window only)
produktdatenbank_verwaltung.png      ← Excerpt (window only)
produktdatenbank_signing.png         ← Authentication screen
```

### 2. **Fußpflege App** (3 images)
```
fusspflege_kundenliste.png    ← Customer list (main view)
fusspflege_teilen.png          ← Share action
fusspflege_registrierung.png   ← Registration form
```

### 3. **Long COVID App** (1 image)
```
masterarbeit_longcovidapp.png  ← Presentation sheet
```

### 4. **NTGL Event Site** (1 image)
```
ntgl_eventseite.png  ← Full event page
```

### 5. **Da Hoam (Nest-Haus)** (5 images)
```
da-hoam_landingpage.png    ← Main showcase (featured)
da-hoam_konfigurator.png   ← Configurator (featured)
da-hoam_konzeptcheck.png   ← Supporting image
da-hoam_warumwir.png       ← Supporting image
da-hoam_kontakt.png        ← Supporting image
```

**Total: 14 images**

## 📋 Naming Convention

**IMPORTANT**: Use these EXACT filenames (case-sensitive):

| Project | Filename Pattern | Example |
|---------|-----------------|---------|
| SSC Railtec | `produktdatenbank_[type].png` | `produktdatenbank_produkt.png` |
| Fußpflege | `fusspflege_[type].png` | `fusspflege_kundenliste.png` |
| Long COVID | `masterarbeit_longcovidapp.png` | (exact name) |
| NTGL Events | `ntgl_eventseite.png` | (exact name) |
| Da Hoam | `da-hoam_[type].png` | `da-hoam_landingpage.png` |

## 🚀 Method 1: Upload via Vercel Dashboard (Recommended)

### Step 1: Go to Vercel Blob Storage
1. Open [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your portfolio project
3. Click "Storage" in the sidebar
4. Click "Blob" or "Create Database" → Select "Blob"
5. Name it: `janp-portfolio-blob` (if not created yet)

### Step 2: Upload Images
1. In your Blob storage, click "Upload"
2. Create folder: `images/` (if doesn't exist)
3. Upload each image with the EXACT filename:
   - `produktdatenbank_produkt.png`
   - `produktdatenbank_konfigurationen.png`
   - etc.

### Step 3: Get the Blob URL
After upload, Vercel will show URLs like:
```
https://[token].public.blob.vercel-storage.com/images/produktdatenbank_produkt.png
```

Copy the base URL (everything before `/images/`) and update in code if different from:
`https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com`

## 🛠️ Method 2: Upload via API (For Bulk Upload)

### Step 1: Set Environment Variable
```bash
# In Vercel Dashboard → Settings → Environment Variables
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxx...
```

### Step 2: Use Upload Script
Create a file `upload-images.js`:

```javascript
const { put } = require('@vercel/blob');
const fs = require('fs');
const path = require('path');

// Configure your images folder
const IMAGES_FOLDER = './screenshots'; // Change to your folder

async function uploadImages() {
  const files = fs.readdirSync(IMAGES_FOLDER);
  
  for (const file of files) {
    if (!file.match(/\.(png|jpg|jpeg)$/i)) continue;
    
    const filePath = path.join(IMAGES_FOLDER, file);
    const fileBuffer = fs.readFileSync(filePath);
    const blob = new Blob([fileBuffer]);
    
    console.log(`Uploading ${file}...`);
    
    const result = await put(`images/${file}`, blob, {
      access: 'public',
      addRandomSuffix: false,
    });
    
    console.log(`✅ Uploaded: ${result.url}`);
  }
}

uploadImages();
```

Run:
```bash
node upload-images.js
```

## 🔧 Method 3: Upload via Web Interface (Custom)

I've created an upload API for you at `/api/upload-image`.

Create a simple HTML file to upload:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Upload Images</title>
</head>
<body>
  <h1>Upload Portfolio Images</h1>
  <input type="file" id="fileInput" accept="image/*">
  <button onclick="upload()">Upload</button>
  <div id="result"></div>
  
  <script>
    async function upload() {
      const file = document.getElementById('fileInput').files[0];
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
      });
      
      const result = await response.json();
      document.getElementById('result').innerHTML = 
        `<p>Uploaded: <a href="${result.url}">${result.url}</a></p>`;
    }
  </script>
</body>
</html>
```

## ✅ Verification

### Check Images Are Uploaded

Visit this URL to list all images:
```
https://your-site.vercel.app/api/upload-image
```

Or manually check URLs:
```
https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/produktdatenbank_produkt.png
https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/da-hoam_landingpage.png
```

### Test One Image
```bash
curl -I https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/produktdatenbank_produkt.png
```

Should return `200 OK` if image exists.

## 📐 Image Requirements

### Recommended Sizes
- **Full screenshots**: 1920x1080 or 1440x900
- **Mobile screenshots**: 750x1334 or 1125x2436
- **Presentation sheets**: As exported (maintain aspect ratio)

### Format
- **PNG** preferred (better quality for screenshots)
- **JPG** acceptable (smaller file size)
- **WebP** also supported

### File Size
- Keep under 2 MB per image
- Optimize before upload using tools like:
  - TinyPNG.com
  - Squoosh.app
  - ImageOptim (Mac)

## 🎨 Image Presentation Guide

Based on your requirements:

### SSC Railtec Database
```
✅ produktdatenbank_produkt.png
   → FULL screenshot with menu bar
   → Main showcase image
   → Display prominently

⚠️ produktdatenbank_konfigurationen.png
   → EXCERPT (window only, no menu bar)
   → Smaller presentation
   → Show as secondary image

⚠️ produktdatenbank_verwaltung.png
   → EXCERPT (window only, no menu bar)
   → Smaller presentation
   → Show as secondary image

✅ produktdatenbank_signing.png
   → Full authentication screen
```

### Fußpflege App
```
✅ fusspflege_kundenliste.png
   → Present similar to Long COVID sheet
   → Design should match masterarbeit_longcovidapp style
   → Show what the app can do
```

### Da Hoam
```
⭐ da-hoam_landingpage.png
   → MAIN image, featured prominently
   → Large, stylish presentation

📐 Layout underneath:
   Left: da-hoam_konzeptcheck.png
   Right: da-hoam_warumwir.png
   Then: da-hoam_kontakt.png

⭐ da-hoam_konfigurator.png
   → Own dedicated section
   → Describe interactive configuration feature
```

## 🔄 After Upload

### Update Blob URL (If Needed)
If your Vercel Blob URL is different from `https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com`:

1. Open `src/lib/blobStorage.ts`
2. Update line 3:
```typescript
const VERCEL_BLOB_BASE_URL = 'https://YOUR-ACTUAL-TOKEN.public.blob.vercel-storage.com';
```

### Rebuild and Deploy
```bash
npm run build
git add .
git commit -m "Add project images to Vercel Blob"
git push origin main
```

## 🐛 Troubleshooting

### Images Not Showing
1. Check blob URL is correct
2. Verify filenames match exactly (case-sensitive)
3. Check images are in `images/` folder
4. Verify images are public (not private)
5. Check browser console for 404 errors

### Wrong Blob URL
If you see 404 errors, get your actual blob URL:
1. Go to Vercel Dashboard
2. Storage → Blob
3. Upload a test image
4. Copy the URL
5. Update `VERCEL_BLOB_BASE_URL` in `blobStorage.ts`

### Can't Upload
1. Make sure `BLOB_READ_WRITE_TOKEN` is set
2. Check token has write permissions
3. Try uploading via Vercel Dashboard instead

## 📊 Checklist

Before deployment, verify:

- [ ] All 14 images uploaded
- [ ] Filenames match exactly
- [ ] Images are in `images/` folder
- [ ] Blob URL is correct in code
- [ ] Images are public (not private)
- [ ] Test URLs return 200 OK
- [ ] Rebuild and redeploy
- [ ] Check images display on site

## 💡 Pro Tips

1. **Optimize images** before upload (compress to <500 KB each)
2. **Use PNG** for UI screenshots (crisp text)
3. **Use JPG** for photos (smaller size)
4. **Keep original aspect ratios** (don't distort)
5. **Test one image first** before uploading all
6. **Name files correctly** from the start (avoid renaming)

## 📞 Need Help?

If images still don't show:
1. Check browser console (F12) for errors
2. Verify blob URL in Network tab
3. Test direct URL in browser
4. Check Vercel deployment logs

---

**Next Step**: Upload images via Vercel Dashboard, then redeploy!
