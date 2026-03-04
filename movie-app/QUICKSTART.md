# Quick Start Guide 🚀

## 5-Minute Setup

### Step 1: Install Dependencies

**Option A: Automatic (Windows)**
```bash
cd movie-app
start-app.bat
```

**Option B: Manual Setup**

Terminal 1 - Backend:
```bash
cd server
npm install
npm start
```

Terminal 2 - Frontend:
```bash
cd client
npm install
npm start
```

### Step 2: Open Your Browser
Once everything is running:
- Frontend: Open `http://localhost:3000`
- Backend API: `http://localhost:5000/api/movies`

### Step 3: Start Exploring!
Use the filter panel to:
1. Select **Category** (Old, New, or Trending)
2. Choose **Genre** (Action, Drama, Sci-Fi, etc.)
3. Pick **Language** (English, Hindi, Korean, etc.)
4. Filter by **Year**

## Troubleshooting

### Backend won't start
```bash
# Check if port 5000 is already in use
# Either change PORT in server/.env
# Or kill the process using port 5000
```

### Frontend won't load
```bash
# Make sure backend is running
# Check http://localhost:5000/api/health
```

### CORS Error
Make sure backend is running on port 5000
Check that frontend is on port 3000

### Need to add more movies?
Edit: `server/data/movies.json`
Then restart the backend

## Quick API Tests

### Get all movies
```bash
curl http://localhost:5000/api/movies
```

### Get trending movies
```bash
curl "http://localhost:5000/api/movies?category=trending"
```

### Get English movies
```bash
curl "http://localhost:5000/api/movies?language=English"
```

### Get 2023 movies
```bash
curl "http://localhost:5000/api/movies?year=2023"
```

### Get Sci-Fi movies
```bash
curl "http://localhost:5000/api/movies?genre=Sci-Fi"
```

## File Locations

Important files to know:
- **Movies Data:** `server/data/movies.json`
- **Backend Config:** `server/.env`
- **Frontend Colors:** `client/src/styles/App.css`
- **API Logic:** `server/routes/movies.js`

## Next Steps

1. ✅ App is running locally
2. Add more movies to `movies.json`
3. Integrate with a real database (MongoDB)
4. Deploy to production (Heroku, Vercel, etc.)
5. Add user authentication
6. Create user preferences & wishlists

---

**Need help?** Check [README.md](./README.md) for detailed documentation.
