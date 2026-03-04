# 🚀 Deploy Your Movie App in 5 Minutes

## Step 1: Prepare Your Code for GitHub

```bash
cd c:\Users\Sanja\OneDrive\Desktop\NAGARJUN-SIVAKUMAR\movie-app

# Initialize Git
git init
git add .
git commit -m "Initial commit: Movie Suggestion App"
git branch -M main
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create repository named: `movie-suggestion-app`
3. **Copy** the commands shown (don't initialize with README)

## Step 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/movie-suggestion-app.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username!

---

## Step 4: Deploy Backend (Railway) ⚙️

1. Go to https://railway.app
2. Sign up with GitHub → Authorize
3. Click **"New Project"** → **"Deploy from GitHub repo"**
4. Select your `movie-suggestion-app` repository
5. Railway will auto-detect it's a Node.js app
6. **Wait for deployment** (3-5 minutes)
7. Click on your project → **Deployments**
8. Copy your public URL (e.g., `https://movie-app-backend.up.railway.app`)
9. Go to **Variables** tab and add:
   ```
   PORT=5000
   NODE_ENV=production
   CORS_ORIGIN=https://YOUR-VERCEL-URL.vercel.app
   ```
10. **Save** - deployment will restart with new variables

**Backend URL:** Keep this! You'll need it for Vercel. ✅

---

## Step 5: Deploy Frontend (Vercel) 🎨

1. Go to https://vercel.com
2. Sign up with GitHub → Authorize
3. Click **"New Project"**
4. Select your `movie-suggestion-app` repository
5. **Configure Project:**
   - **Framework:** React
   - **Root Directory:** `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`

6. **Add Environment Variable:**
   - Name: `REACT_APP_API_URL`
   - Value: `https://YOUR-RAILWAY-BACKEND-URL.up.railway.app/api`
     (Use the Railway URL from Step 4)

7. Click **"Deploy"** → **Wait for build** (2-3 minutes)

8. Once deployed, Vercel shows your URL (e.g., `https://movie-app.vercel.app`)

**Frontend is LIVE!** 🎉

---

## Step 6: Final Configuration

Update Railway CORS to allow your Vercel URL:

1. Go back to Railway project
2. **Variables** tab
3. Update `CORS_ORIGIN` with your Vercel URL:
   ```
   https://movie-app-xxx.vercel.app
   ```
4. Save & redeploy

---

## Test Your App

### Open in Browser:
```
https://YOUR-VERCEL-URL.vercel.app
```

### Test API:
```
https://YOUR-RAILWAY-URL.up.railway.app/api/health
```

Should return: `{"status":"Server is running"}`

---

## What Happens on Updates?

From now on:
1. Make code changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your message"
   git push
   ```
3. **Both Vercel and Railway auto-deploy!** ✨

---

## Troubleshooting

### Frontend shows blank page
- Check browser console (F12)
- Verify `REACT_APP_API_URL` in Vercel Settings → Environment Variables

### API calls failing
- Open browser DevTools → Network tab
- Check the URL being called
- Make sure Railway backend is running (check Railway Logs)

### CORS errors
- Update `CORS_ORIGIN` in Railway Variables
- Make sure it matches your Vercel URL exactly

### Deployment fails
- Click on Deployment in Vercel/Railway
- Read the logs for error messages
- Common issues:
  - Missing environment variables
  - Node version mismatch
  - Port already in use

---

## Optional: Add Custom Domain

### For Vercel:
1. Go to Dashboard → Project Settings → Domains
2. Add your domain (requires DNS setup)

### For Railway:
1. Go to Project Settings → Network
2. Add custom domain

---

## Summary

| Step | Platform | Time | Status |
|------|----------|------|--------|
| 1 | GitHub | 5 min | Push code |
| 2 | Railway | 5 min | Deploy backend |
| 3 | Vercel | 5 min | Deploy frontend |
| 4 | Setup | 2 min | Configure CORS |
| **Total** | | **17 min** | **✅ LIVE** |

**Your Movie App is now live on the internet!** 🌍🎬

---

## Next Steps

- ✅ App is live
- 👤 Add user authentication
- 💾 Add MongoDB database
- ⭐ Add favorites/wishlist
- 🎨 Add more movies
- 📱 Improve mobile design

Enjoy! 🍿
