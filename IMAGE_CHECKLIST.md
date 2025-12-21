# 📸 Quick Image Checklist

## What You Need to Do

1. **Prepare 14 screenshots** from your projects
2. **Rename them** with exact filenames below
3. **Upload to Vercel Blob** under `images/` folder
4. **Redeploy** your site

## 📋 Exact Filenames Required

### SSC Railtec Database (4 images)

#### Screenshot 1: Product Form (MAIN)
- **Current name**: produktdatenbank_XXX where XXX = "produkt"
- **Rename to**: `produktdatenbank_produkt.png`
- **Description**: Product registration form WITH full menu bar on top
- **Presentation**: Featured, large display
- **Shows**: Complete menu bar + product form

#### Screenshot 2: Configurations Panel
- **Current name**: produktdatenbank_XXX where XXX = "konfigurationen"  
- **Rename to**: `produktdatenbank_konfigurationen.png`
- **Description**: Configuration panel WITHOUT menu bar (window only)
- **Presentation**: Smaller excerpt
- **Shows**: Just the configuration window

#### Screenshot 3: Administration Panel
- **Current name**: produktdatenbank_XXX where XXX = "verwaltung"
- **Rename to**: `produktdatenbank_verwaltung.png`
- **Description**: Admin panel WITHOUT menu bar (window only)
- **Presentation**: Smaller excerpt
- **Shows**: Just the admin window

#### Screenshot 4: Authentication
- **Current name**: produktdatenbank_XXX where XXX = "signing"
- **Rename to**: `produktdatenbank_signing.png`
- **Description**: Authentication/login screen
- **Presentation**: Supporting image
- **Shows**: Login form

---

### Fußpflege App (3 images)

#### Screenshot 1: Customer List (MAIN)
- **Current name**: fusspflege_XXX where XXX = "kundenliste"
- **Rename to**: `fusspflege_kundenliste.png`
- **Description**: List of all registered users/patients
- **Presentation**: Similar style to Long COVID presentation sheet
- **Shows**: Database list view with all customers

#### Screenshot 2: Share Action
- **Current name**: fusspflege_XXX where XXX = "teilen"
- **Rename to**: `fusspflege_teilen.png`
- **Description**: Share action from the user list
- **Presentation**: Secondary image
- **Shows**: Share/export functionality

#### Screenshot 3: Registration Form
- **Current name**: fusspflege_XXX where XXX = "registrierung"
- **Rename to**: `fusspflege_registrierung.png`
- **Description**: New customer/patient registration form
- **Presentation**: Secondary image
- **Shows**: Input form for new patient

---

### Long COVID App (1 image)

#### Screenshot 1: Presentation Sheet
- **Current name**: masterarbeit_longcovidapp
- **Rename to**: `masterarbeit_longcovidapp.png`
- **Description**: Sheet from your master presentation
- **Presentation**: Featured, shows app capabilities
- **Shows**: What the app can do and its use cases
- **Note**: This is your design reference for fusspflege presentation

---

### NTGL Event Site (1 image)

#### Screenshot 1: Event Page
- **Current name**: ntgl_eventseite
- **Rename to**: `ntgl_eventseite.png`
- **Description**: Full event registration website
- **Presentation**: Featured
- **Shows**: Flyer on top, Next.js preview with links, registration form below

---

### Da Hoam / Nest-Haus (5 images)

#### Screenshot 1: Landing Page (MAIN)
- **Current name**: da-hoam_landingpage OR da_hoam_landingpage
- **Rename to**: `da-hoam_landingpage.png`
- **Description**: Main landing page (long image)
- **Presentation**: ⭐ FEATURED - Large, stylish, prominent
- **Shows**: Full landing page

#### Screenshot 2: Konfigurator (FEATURED)
- **Current name**: da-hoam_konfigurator OR da_hoam_konfigurator
- **Rename to**: `da-hoam_konfigurator.png`
- **Description**: Interactive house configurator
- **Presentation**: ⭐ Own dedicated section below the grid
- **Shows**: Interactive configuration interface
- **Note**: Describe how users can configure their house

#### Screenshot 3: Konzept Check
- **Current name**: da-hoam_konzeptcheck OR da_hoam_konzeptcheck
- **Rename to**: `da-hoam_konzeptcheck.png`
- **Description**: Concept check section
- **Presentation**: Left side in grid under landingpage
- **Shows**: Concept verification feature

#### Screenshot 4: Warum Wir
- **Current name**: da-hoam_warumwir OR da_hoam_warumwir
- **Rename to**: `da-hoam_warumwir.png`
- **Description**: Why choose us section
- **Presentation**: Right side in grid under landingpage
- **Shows**: Company benefits/advantages

#### Screenshot 5: Kontakt
- **Current name**: da-hoam_kontakt OR da_hoam_kontakt
- **Rename to**: `da-hoam_kontakt.png`
- **Description**: Contact section
- **Presentation**: Below the grid
- **Shows**: Contact form/information

---

## 🎨 Visual Layout

### Da Hoam Layout:
```
┌─────────────────────────────────────┐
│   da-hoam_landingpage.png          │
│   (Large, featured, stylish)        │
└─────────────────────────────────────┘

┌──────────────────┬──────────────────┐
│ da-hoam_         │  da-hoam_        │
│ konzeptcheck.png │  warumwir.png    │
└──────────────────┴──────────────────┘

┌─────────────────────────────────────┐
│   da-hoam_kontakt.png               │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│   da-hoam_konfigurator.png          │
│   (Own section with description)    │
│   "Configure your house              │
│    interactively..."                 │
└─────────────────────────────────────┘
```

## ⚠️ Important Notes

### File Naming
- Use **hyphens** (`-`) not underscores in "da-hoam"
- Use **underscores** (`_`) in other project names
- All lowercase
- Extension: `.png` preferred (or `.jpg`)

### Data Privacy
- All data shown is randomized ✅
- No real personal information ✅
- Safe to display publicly ✅

### Presentation Styles

**Full Screenshot** (with menu bar):
- produktdatenbank_produkt.png ← Shows complete UI
- All da-hoam images
- ntgl_eventseite.png

**Excerpt** (window only, no menu bar):
- produktdatenbank_konfigurationen.png ← Smaller presentation
- produktdatenbank_verwaltung.png ← Smaller presentation

**Presentation Style** (like slides):
- masterarbeit_longcovidapp.png ← Sheet format
- fusspflege_kundenliste.png ← Should match this style

## 📤 Upload Steps

### Option 1: Vercel Dashboard (Easiest)
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Storage → Blob (or create it: "janp-portfolio-blob")
4. Click "Upload"
5. Create folder: `images/`
6. Upload all 14 files with exact names above

### Option 2: Using the Upload API
1. Set `BLOB_READ_WRITE_TOKEN` in Vercel
2. Use the `/api/upload-image` endpoint
3. Or use the upload script in IMAGE_UPLOAD_GUIDE.md

## ✅ Verification Checklist

After upload, check these URLs work:

```
https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/produktdatenbank_produkt.png
https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/produktdatenbank_konfigurationen.png
https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/produktdatenbank_verwaltung.png
https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/produktdatenbank_signing.png
https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/fusspflege_kundenliste.png
https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/fusspflege_teilen.png
https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/fusspflege_registrierung.png
https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/masterarbeit_longcovidapp.png
https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/ntgl_eventseite.png
https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/da-hoam_landingpage.png
https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/da-hoam_konfigurator.png
https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/da-hoam_konzeptcheck.png
https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/da-hoam_warumwir.png
https://1mkowktdsbm6ra0z.public.blob.vercel-storage.com/images/da-hoam_kontakt.png
```

**Each should return an image, not a 404 error.**

## 🚀 After Upload

1. Images upload to Vercel Blob ✅
2. Redeploy your site (automatic or manual)
3. Visit your portfolio
4. Check Projects section
5. Images should display in carousels!

## 🎯 Quick Summary

| # | Project | Images | Main Feature |
|---|---------|--------|--------------|
| 1 | SSC Railtec | 4 | produkt has menu bar, others are excerpts |
| 2 | Fußpflege | 3 | kundenliste styled like COVID sheet |
| 3 | Long COVID | 1 | Presentation sheet (design reference) |
| 4 | NTGL Events | 1 | Full page with flyer |
| 5 | Da Hoam | 5 | landingpage featured, konfigurator own section |

**Total: 14 images to upload**

---

**Ready?** Collect your screenshots, rename them, and upload to Vercel Blob! 🚀
