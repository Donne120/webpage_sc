# 🚀 Deployment Guide - Student Companion Chatbot

## ✅ Security Setup Complete

Your environment variables are now secured:
- ✅ `.env` file created with Supabase credentials
- ✅ `.gitignore` configured to exclude sensitive files
- ✅ `node_modules` excluded from Git
- ✅ Environment variables moved to `.env` file
- ✅ Code pushed to GitHub: https://github.com/Ngum12/webpage_sc.git

---

## 🌐 Deploy to Vercel (Recommended - 5 minutes)

### Step 1: Sign Up / Login
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"

### Step 2: Import Your Project
1. Click "Add New..." → "Project"
2. Find `webpage_sc` in your repositories
3. Click "Import"

### Step 3: Configure Environment Variables
Before deploying, add your Supabase credentials:

1. In the Vercel import screen, expand "Environment Variables"
2. Add these two variables:

```
VITE_SUPABASE_URL = https://wfffmtxsphynzzrclmta.supabase.co
VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmZmZtdHhzcGh5bnp6cmNsbXRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0MDU5ODIsImV4cCI6MjA0Njk4MTk4Mn0.9i58bMhFfaF3YE5XMO55eHwMH-OYRGBbYOv9PQ-4YkQ
```

### Step 4: Deploy
1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. Your site will be live at: `https://webpage-sc.vercel.app` (or similar)

### Step 5: Custom Domain (Optional)
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

---

## 🔄 Auto-Deployment

Every time you push to GitHub, Vercel will automatically:
- ✅ Pull your latest code
- ✅ Build your project
- ✅ Deploy to production
- ✅ Update your live site

**Command to update:**
```bash
git add .
git commit -m "Your update message"
git push origin main
```

---

## 🆘 Troubleshooting

### Build Fails on Vercel
**Solution:** Check Environment Variables are added correctly in Vercel dashboard

### "Missing Supabase environment variables" Error
**Solution:** Verify both `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set in Vercel

### Video Not Loading
**Solution:** Ensure `demo.mp4` is in `src/assets/` folder and pushed to GitHub

---

## 📊 What's Deployed

Your website includes:
- ✅ Hero section with video
- ✅ Interactive floating chatbot (Wikipedia search)
- ✅ Newsletter subscription (Supabase)
- ✅ Chat message storage (Supabase)
- ✅ Calendly meeting booking
- ✅ Testimonials, FAQ, CTA sections
- ✅ Responsive design for all devices

---

## 🔐 Security Notes

- `.env` file is **NOT** pushed to GitHub ✅
- `node_modules` folder is **NOT** pushed to GitHub ✅
- Environment variables are safely stored in Vercel ✅
- Supabase anon key is public-safe (Row Level Security enabled) ✅

---

## 📝 Next Steps After Deployment

1. **Test Your Live Site:**
   - Try the floating chatbot
   - Subscribe to newsletter
   - Book a meeting via Calendly
   - Check Supabase dashboard for stored data

2. **Share Your Link:**
   - Copy your Vercel URL
   - Share with team/users
   - Add to your GitHub repo description

3. **Monitor Analytics:**
   - Go to Supabase → Table Editor
   - View `chat_messages` for chat logs
   - View `newsletter_subscribers` for emails

---

## 🎉 You're Live!

After deployment, your site will be accessible worldwide with:
- ✅ HTTPS encryption
- ✅ Global CDN (fast everywhere)
- ✅ Automatic SSL certificate
- ✅ 99.99% uptime

**Questions?** Check [Vercel Documentation](https://vercel.com/docs)
