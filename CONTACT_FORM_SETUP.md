# Quick Setup Guide - Contact Form & Email

## 🚀 5-Minute Setup

### Step 1: Sign Up for Resend (2 minutes)
1. Go to [https://resend.com](https://resend.com)
2. Sign up (free tier: 100 emails/day)
3. Click "API Keys" in dashboard
4. Create new API key
5. Copy the key (starts with `re_`)

### Step 2: Add to Vercel (2 minutes)
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add new variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - **Environments**: Production, Preview, Development
5. Click Save

### Step 3: Redeploy (1 minute)
```bash
git add .
git commit -m "Add Resend API key"
git push origin main
```

Or in Vercel: Deployments → Click "..." → Redeploy

### Step 4: Test It! (1 minute)
1. Go to your live site
2. Click "Contact" or scroll to contact section
3. Fill out the form
4. Submit
5. Check `stenkjan@gmail.com` for the email!

## ✅ That's It!

Your contact form is now sending real emails to your Gmail account.

## 💡 What Happens When Users Submit

1. **User fills form** on your website
2. **Form validates** data (client-side)
3. **API sends email** via Resend
4. **You receive email** at stenkjan@gmail.com
5. **User sees success message**
6. **You can reply** directly to the email

## 📧 Email Features

- ✅ Professional HTML formatting
- ✅ All form data included
- ✅ Reply-to set to user's email
- ✅ Bilingual (German/English)
- ✅ Meeting scheduling info (if provided)
- ✅ Mobile optimized

## 🔧 Troubleshooting

**Email not received?**
1. Check spam folder
2. Verify API key in Vercel
3. Check Resend dashboard logs
4. Ensure you redeployed after adding key

**Form not working?**
1. Open browser console (F12)
2. Check for errors
3. Verify RESEND_API_KEY is set
4. Try incognito mode

**Still having issues?**
- Check Resend dashboard for error logs
- Verify environment variable is set correctly
- Ensure you redeployed after adding the key

## 🎯 Next Steps

1. **Test the form** - Send yourself a test message
2. **Check spam folder** - First email might go there
3. **Verify domain** (optional) - For better deliverability
4. **Monitor** - Check Resend dashboard for send history

---

**Your contact form is production-ready and will send all inquiries to: stenkjan@gmail.com** 🎉
