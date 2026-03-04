# Deployment Guide 🚀

## Overview
- **Frontend:** Vercel (React app)
- **Backend:** Railway (Node.js/Express API)
- **Database:** JSON (can upgrade to MongoDB)

## Part 1: Deploy Backend to Railway ⚙️

### Step 1: Prepare Backend for Deployment

1. Your backend is already mostly ready! Just ensure:
   - `server/package.json` has proper scripts
   - `server/.env` is configured (won't be committed)

2. Create a `Procfile` in the server directory (if needed by Railway):
```
web: node server.js
```

### Step 2: Push Code to GitHub

1. Initialize git (if not already done):
```bash
cd c:\Users\Sanja\OneDrive\Desktop\NAGARJUN-SIVAKUMAR\movie-app
git init
git add .
git commit -m "Initial commit: Movie Suggestion App"
```

2. Create a new GitHub repository:
   - Go to https://github.com/new
   - Name: `movie-suggestion-app`
   - Don't initialize with README (we have one)
   - Click "Create repository"

3. Add remote and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/movie-suggestion-app.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy Backend to Railway

1. **Sign up/Login to Railway:**
   - Go to https://railway.app
   - Sign up with GitHub (recommended)

2. **Create New Project:**
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your `movie-suggestion-app` repository
   - Click "Deploy Now"

3. **Configure Environment:**
   - Go to project Settings
   - Add "Root Directory": `server`
   - Add "Service": Create new service
   - Set "Start Command": `npm install && npm start`

4. **Set Environment Variables:**
   - In Railway dashboard, go to Variables
   - Add:
     ```
     PORT=5000
     NODE_ENV=production
     ```

5. **Get Your Backend URL:**
   - Railway will assign a public URL
   - Copy it (e.g., `https://movie-app-backend.up.railway.app`)
   - This is your `REACT_APP_API_URL`

---

## Part 2: Deploy Frontend to Vercel 🎨

### Step 1: Prepare Frontend

1. Update `.env.local` with your Railway backend URL:
```bash
# Create file: client/.env.production
REACT_APP_API_URL=https://movie-app-backend.up.railway.app
```

2. Update API client to use environment variable:
   - Edit `client/src/api.js`:
```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
```

### Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel:**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project:**
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Build Settings:**
   - **Root Directory:** `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Install Command:** `npm install`

4. **Add Environment Variables:**
   - Add variable:
     ```
     REACT_APP_API_URL=https://your-railway-backend-url.up.railway.app/api
     ```

5. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete

6. **Get Your Frontend URL:**
   - Vercel will show your deployed URL
   - (e.g., `https://movie-app.vercel.app`)

---

## Part 3: Connect Frontend to Backend ✅

1. Update backend CORS in `server/server.js`:
```javascript
const cors = require('cors');

app.use(cors({
  origin: 'https://your-vercel-url.vercel.app',
  credentials: true
}));
```

2. Push changes and redeploy both apps.

---

## Testing Your Deployment

### Test Backend API:
```bash
curl https://your-railway-backend-url.up.railway.app/api/health
```

Should return: `{"status":"Server is running"}`

### Test Frontend:
1. Open your Vercel URL in browser
2. Use all filter features
3. Check browser console for any errors

---

## Troubleshooting

### Backend won't deploy:
- Check Railway logs: Project → Logs
- Ensure `package.json` in `server/` has proper scripts
- Verify `server.js` exists and is configured correctly

### Frontend shows blank page:
- Check browser console for errors
- Verify `REACT_APP_API_URL` is set correctly in Vercel
- Make sure backend is running and CORS is configured

### CORS errors:
- Update backend CORS to allow your Vercel domain
- Ensure backend URL in frontend is correct

### Port issues:
- Railway assigns port automatically via `process.env.PORT`
- Ensure your `server.js` uses: `const PORT = process.env.PORT || 5000`

---

## Next Steps (Optional Improvements)

### Add MongoDB Database:
1. Create MongoDB Atlas account: https://www.mongodb.com/cloud/atlas
2. Install Mongoose: `npm install mongoose`
3. Update models to use MongoDB
4. Add connection string to Railway environment variables

### Add Custom Domain:
- Vercel: Project Settings → Domains → Add custom domain
- Railway: Project Settings → Network → Add custom domain

### Enable Automatic Deployments:
- Both Vercel and Railway auto-deploy on `git push`
- No manual deployment needed!

### Add CI/CD Pipeline:
- Create `.github/workflows/deploy.yml`
- Automatically run tests before deployment

---

## Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Backend deployed to Railway
- [ ] Frontend deployed to Vercel
- [ ] Environment variables set in both services
- [ ] CORS configured for frontend domain
- [ ] Backend API responding on public URL
- [ ] Frontend loading data from backend
- [ ] All filters working
- [ ] No console errors
- [ ] Custom domain set up (optional)

---

## Quick Reference

| Service | URL | Purpose |
|---------|-----|---------|
| GitHub | https://github.com | Source code |
| Railway | https://railway.app | Backend hosting |
| Vercel | https://vercel.com | Frontend hosting |
| MongoDB Atlas | https://mongodb.com/cloud/atlas | Database (optional) |

Your Movie Suggestion App is now live! 🎉
