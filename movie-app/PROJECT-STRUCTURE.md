# Movie Suggestion App - Complete Setup

## 📁 Project Structure

```
movie-app/
├── server/                 # Backend (Node.js/Express)
│   ├── models/
│   │   └── Movie.js
│   ├── routes/
│   │   └── movies.js
│   ├── data/
│   │   └── movies.json    # Movie database (15 sample movies)
│   ├── server.js          # Main server file
│   ├── package.json
│   ├── .env               # Environment variables
│   ├── .env.example       # Example env file
│   ├── Procfile           # Railway deployment config
│   └── .gitignore
│
├── client/                # Frontend (React)
│   ├── src/
│   │   ├── components/
│   │   │   ├── MovieCard.jsx
│   │   │   ├── FilterPanel.jsx
│   │   │   └── MovieList.jsx
│   │   ├── styles/
│   │   │   ├── App.css
│   │   │   ├── FilterPanel.css
│   │   │   ├── MovieCard.css
│   │   │   ├── MovieList.css
│   │   │   └── index.css
│   │   ├── api.js         # API client
│   │   ├── App.jsx        # Main component
│   │   └── index.jsx      # React entry point
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
├── README.md              # Full documentation
├── QUICKSTART.md          # 5-minute setup guide
├── DEPLOYMENT.md          # Detailed deployment guide
├── DEPLOY-NOW.md          # Quick deployment steps
├── railway.toml           # Railway config
├── vercel.json            # Vercel config
└── .gitignore
```

## 🚀 Quick Links

### Documentation
- **README.md** - Full project documentation with API endpoints
- **QUICKSTART.md** - 5-minute local setup
- **DEPLOYMENT.md** - Detailed deployment guide for Vercel + Railway
- **DEPLOY-NOW.md** - Fast track deployment (READ THIS FIRST!)

### Local Development
```bash
# Terminal 1 - Backend
cd server
npm install
npm start        # Runs on http://localhost:5000

# Terminal 2 - Frontend
cd client
npm install
npm start        # Runs on http://localhost:3000
```

### Deployment (Vercel + Railway)
1. Push code to GitHub
2. Deploy backend to Railway (3-5 min)
3. Deploy frontend to Vercel (2-3 min)
4. Configure CORS
5. **Live!** ✨

See **DEPLOY-NOW.md** for step-by-step instructions.

## ⚙️ Configuration Files

### Backend Environment (server/.env)
```
PORT=5000
NODE_ENV=production
CORS_ORIGIN=https://your-vercel-url.vercel.app
```

### Frontend Environment (client/.env.local)
```
REACT_APP_API_URL=https://your-railway-backend-url.up.railway.app/api
```

## 🎯 Features

✅ Search and filter movies by:
- Genre (Action, Drama, Sci-Fi, Comedy, etc.)
- Language (English, Hindi, Korean)
- Year (1972-2024)
- Category (Old, New, Trending)

✅ Beautiful responsive UI with:
- Real-time filtering
- Movie ratings
- Director information
- Genre tags
- Category badges

✅ Full-stack application:
- Node.js/Express backend
- React frontend
- RESTful API
- JSON data storage

## 📊 API Endpoints

```
GET  /api/movies                    # Get all movies (with filters)
GET  /api/movies/:id               # Get single movie
GET  /api/movies/filters/genres    # Get available genres
GET  /api/movies/filters/languages # Get available languages
GET  /api/movies/filters/years     # Get available years
GET  /api/health                   # Health check
```

### Query Parameters
```
?genre=Sci-Fi,Action
?language=English,Hindi
?year=2023,2024
?category=trending,new
```

## 🎨 UI Components

### MovieCard
- Displays movie poster, title, year, rating
- Shows director and genres
- Category badge (Old/New/Trending)
- Responsive layout

### FilterPanel
- Multi-select checkboxes
- Category, Genre, Language, Year filters
- "Reset All" button
- Sticky positioning on desktop

### MovieList
- Grid layout (responsive)
- Results count
- Loading and error states
- Empty state message

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- CORS middleware
- Dotenv for config

### Frontend
- React 18
- Axios for HTTP requests
- CSS3 with Grid/Flexbox
- Responsive design

### Deployment
- Vercel (Frontend)
- Railway (Backend)
- GitHub (Source control)

## 📱 Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## 🚀 Performance Tips

1. **Images:** Using placeholder URLs (can add real images)
2. **Data:** Currently JSON-based (scale with MongoDB)
3. **Caching:** Add Redis for improved performance
4. **CDN:** Vercel includes built-in CDN

## 📝 Sample Data

App includes 15 sample movies:
- **English:** Inception, The Matrix, Oppenheimer, Barbie, Dune, The Godfather, Killers of the Flower Moon, Interstellar, Five Nights at Freddy's
- **Hindi:** 3 Idiots, Taare Zameen Par, Sholay, Dangal, Piku
- **Korean:** Parasite

## 🎓 Learning Resources

- React Hooks: https://react.dev/reference/react
- Express.js: https://expressjs.com/
- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app/

## 🤝 Contributing

To add more movies:
1. Edit `server/data/movies.json`
2. Add new movie object with required fields
3. Push to GitHub
4. Railway auto-redeployes

## 📄 License

MIT License - Feel free to use this for learning and personal projects!

## 🎬 What's Next?

- Add MongoDB for scalable data storage
- Implement user authentication
- Add favorites/wishlist feature
- User reviews and ratings
- Movie recommendations
- Advanced analytics
- Mobile app (React Native)

---

**Happy movie watching!** 🍿✨
