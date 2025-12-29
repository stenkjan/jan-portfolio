# 🔐 Vercel Blob Token Setup Instructions

## Why Images Aren't Loading

The API is returning `{"error":"Failed to fetch images"}` because the `BLOB_READ_WRITE_TOKEN` environment variable is missing.

## How to Fix (3 Steps)

### Step 1: Get Your Vercel Blob Token

1. Open your browser and go to: **https://vercel.com/dashboard**
2. Click on your portfolio project
3. Click on the **Storage** tab in the left sidebar
4. Find your blob store named: **`jan-portfolio-blob`**
5. Click on it to view details
6. Look for **"Environment Variables"** or **"Tokens"** section
7. Copy the value of `BLOB_READ_WRITE_TOKEN`

**Token format**: It should look like:
```
vercel_blob_rw_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### Step 2: Create .env.local File

In your project root (same folder as `package.json`), create a file named `.env.local`:

**Windows (PowerShell):**
```powershell
# Copy the example file
Copy-Item .env.local.example .env.local
```

**Windows (Git Bash) or macOS/Linux:**
```bash
# Copy the example file
cp .env.local.example .env.local
```

### Step 3: Add Your Token

Open `.env.local` and replace the placeholder with your actual token:

```bash
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_YOUR_ACTUAL_TOKEN_HERE
```

**Important**: 
- No quotes around the value
- No spaces before or after the `=`
- Save the file

## Step 4: Restart Dev Server

**Stop the current server** (Ctrl+C in terminal) and restart:

```bash
npm run dev
```

## Verify It's Working

1. Open browser to `http://localhost:3000`
2. Navigate to the Projects section
3. Click on **"Nest-Haus"** tab
4. You should see 5 images loading with a smooth fade-in animation

### Expected Results:

| Project | Expected Images |
|---------|----------------|
| Nest-Haus | 5 images (konfigurator, landingpage, konzeptcheck, warumwir, kontakt) |
| KS-Database | 4 images (produkt, konfigurationen, signin, verwaltung) |
| Event Platforms | 4 images (registrierung, kundenliste, teilen, eventseite) |
| Mobile Apps | 1 image (Longcovidapp) |

## Troubleshooting

### Still Getting "Image not available"?

1. **Check the terminal logs** for errors:
   - Look for "Blob fetch error:" messages
   - Check for authentication errors

2. **Test the API directly**:
   ```bash
   curl http://localhost:3000/api/blob-images?prefix=da-hoam_konfigurator
   ```
   
   **Good response**: `{"images":[{...}]}`
   **Bad response**: `{"error":"Failed to fetch images"}`

3. **Verify token is loaded**:
   - Add this to `src/app/api/blob-images/route.ts` temporarily:
   ```typescript
   console.log('Token exists:', !!process.env.BLOB_READ_WRITE_TOKEN);
   ```
   - Check terminal output when API is called

4. **Check blob storage**:
   - Verify images exist in Vercel dashboard
   - Check file names match the prefixes (e.g., `da-hoam_konfigurator-xxxxx.png`)

### Token Not Found in Vercel Dashboard?

If you don't see the token in Vercel dashboard:

1. You might need to create a new blob store
2. Or generate a new token
3. Make sure you're looking at the correct project

**Alternative**: You can also set environment variables directly in Vercel:
1. Go to Project Settings → Environment Variables
2. Add `BLOB_READ_WRITE_TOKEN` with your token value
3. This won't help local dev, but will work in production

## Security Notes

⚠️ **Important**:
- `.env.local` is automatically ignored by git (it's in `.gitignore`)
- Never commit your blob token to git
- Never share your token publicly
- The token gives read/write access to your blob storage

## Need Help?

If you still can't get it working:

1. Check browser console for errors (F12)
2. Check terminal logs for API errors
3. Verify your blob storage has the images uploaded
4. Make sure file names match the expected pattern

---

**Status After Setup**:
- ✅ Token configured
- ✅ Images loading from Vercel Blob
- ✅ All 14 project images displayed
- ✅ Tech stack visibility improved


