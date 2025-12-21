# 🎯 Quick Image Upload Guide

## Current Situation
✅ **Code is ready** - placeholder images showing
⏳ **Need real screenshots** - 14 images to upload

## Upload Your Images (3 Simple Steps)

### Step 1: Prepare Images
Collect and rename your 14 screenshots:

**SSC Railtec (4 images):**
- `produktdatenbank_produkt.png` ← Main (with menu bar)
- `produktdatenbank_konfigurationen.png` ← Excerpt
- `produktdatenbank_verwaltung.png` ← Excerpt
- `produktdatenbank_signing.png` ← Auth screen

**Fußpflege (3 images):**
- `fusspflege_kundenliste.png` ← Customer list
- `fusspflege_teilen.png` ← Share action
- `fusspflege_registrierung.png` ← Registration

**Long COVID (1 image):**
- `masterarbeit_longcovidapp.png` ← Presentation

**NTGL Events (1 image):**
- `ntgl_eventseite.png` ← Event page

**Da Hoam (5 images):**
- `da-hoam_landingpage.png` ← Main
- `da-hoam_konfigurator.png` ← Configurator
- `da-hoam_konzeptcheck.png` ← Concept
- `da-hoam_warumwir.png` ← Why us
- `da-hoam_kontakt.png` ← Contact

### Step 2: Copy to Project
```bash
# Copy images to public/images/ folder
cp /path/to/your/screenshots/*.png /workspace/public/images/
```

Or on Windows:
```powershell
Copy-Item "C:\path\to\screenshots\*.png" -Destination "C:\workspace\public\images\"
```

### Step 3: Test & Deploy
```bash
# Test locally
npm run dev
# Open http://localhost:3000

# If images look good, deploy
git add public/images/*.png
git commit -m "Add project screenshots"
git push
```

## What You'll See

**Before (placeholder):**
```
┌──────────────────────┐
│  Project Screenshot  │
│ Upload your image to:│
│    public/images/    │
└──────────────────────┘
```

**After (your images):**
```
┌──────────────────────┐
│                      │
│  Your Actual         │
│  Project Screenshot  │
│                      │
└──────────────────────┘
```

## Image Requirements

- **Format**: PNG or JPG
- **Size**: < 2 MB each recommended
- **Naming**: EXACT filenames (case-sensitive!)
- **Location**: `/workspace/public/images/`

## Troubleshooting

**Images not showing?**
1. Check filenames match exactly (case-sensitive)
2. Verify files are in `public/images/` not `public/`
3. Refresh browser (Ctrl+F5)
4. Check browser console for errors

**Images too large?**
Use TinyPNG.com or Squoosh.app to compress them.

---

**That's it!** Just copy 14 renamed images to `public/images/` 🚀
