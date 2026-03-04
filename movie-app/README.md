# Movie Suggestion App 🎬

A full-stack web application for discovering and filtering movies based on genre, language, year, and popularity categories (Old, New, Trending).

## Features

✨ **Core Features:**
- Search and filter movies by multiple criteria
- Filter by Genre (Action, Drama, Sci-Fi, etc.)
- Filter by Language (English, Hindi, Korean, etc.)
- Filter by Year
- Filter by Category (Old/New/Trending)
- Beautiful, responsive UI
- Real-time filtering
- Movie ratings and detailed information

## Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-Origin Resource Sharing
- **Dotenv** - Environment variable management

### Frontend
- **React** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling and animations

### Database
- **JSON** - Sample data storage (can be replaced with MongoDB)

## Project Structure

```
movie-app/
├── server/
│   ├── models/
│   │   └── Movie.js
│   ├── routes/
│   │   └── movies.js
│   ├── data/
│   │   └── movies.json
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── client/
    ├── src/
    │   ├── components/
    │   │   ├── MovieCard.jsx
    │   │   ├── FilterPanel.jsx
    │   │   └── MovieList.jsx
    │   ├── styles/
    │   │   ├── index.css
    │   │   ├── App.css
    │   │   ├── FilterPanel.css
    │   │   ├── MovieCard.css
    │   │   └── MovieList.css
    │   ├── api.js
    │   ├── App.jsx
    │   └── index.jsx
    ├── public/
    │   └── index.html
    └── package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. In a new terminal, navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The frontend will open in your browser at `http://localhost:3000`

## API Endpoints

### Get All Movies (with optional filters)
```
GET /api/movies
Query Parameters:
  - genre: "Action,Drama" (comma-separated)
  - language: "English,Hindi" (comma-separated)
  - year: "2023,2024" (comma-separated)
  - category: "new,trending" (comma-separated)
```

Example:
```
GET /api/movies?genre=Sci-Fi&language=English&category=trending
```

### Get Single Movie
```
GET /api/movies/:id
```

### Get Available Genres
```
GET /api/movies/filters/genres
```

### Get Available Languages
```
GET /api/movies/filters/languages
```

### Get Available Years
```
GET /api/movies/filters/years
```

## Response Format

All API responses follow this format:

```json
{
  "success": true,
  "count": 10,
  "data": [
    {
      "id": 1,
      "title": "Inception",
      "genre": ["Sci-Fi", "Action", "Thriller"],
      "language": "English",
      "year": 2010,
      "rating": 8.8,
      "description": "A skilled thief...",
      "director": "Christopher Nolan",
      "category": "trending",
      "posterUrl": "https://..."
    }
  ]
}
```

## Sample Movie Data

The app comes with 15 sample movies including:
- **English:** Inception, The Matrix, Oppenheimer, Barbie, Dune: Part Two, The Godfather, Killers of the Flower Moon, Interstellar, Five Nights at Freddy's
- **Hindi:** 3 Idiots, Taare Zameen Par, Sholay, Dangal, Piku
- **Korean:** Parasite

**Categories:**
- Old (1970-2015)
- New (2023-2024)
- Trending (Popular picks)

## How to Use

1. Start both backend and frontend servers
2. Open `http://localhost:3000` in your browser
3. Use the filter panel on the left to:
   - Select movie categories (Old/New/Trending)
   - Choose genres
   - Pick languages
   - Filter by year
4. Results update in real-time as you adjust filters
5. Click "Reset All" to clear all filters

## Customization

### Adding More Movies

Edit `server/data/movies.json` and add new movie objects with this structure:

```json
{
  "id": 16,
  "title": "Movie Title",
  "genre": ["Genre1", "Genre2"],
  "language": "Language",
  "year": 2024,
  "rating": 8.5,
  "description": "Movie description",
  "director": "Director Name",
  "category": "new|old|trending",
  "posterUrl": "https://image-url.jpg"
}
```

### Integrating a Real Database

Replace the JSON file with MongoDB:

1. Install Mongoose: `npm install mongoose`
2. Create MongoDB connection in `server.js`
3. Replace file reading with database queries

### Using Real Movie APIs

Integrate with APIs like:
- OMDB API
- TMDB (The Movie Database) API
- IMDb API

## Environment Variables

Create a `.env` file in the `server` directory:

```
PORT=5000
NODE_ENV=development
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- User authentication & accounts
- Watch list / Favorites
- User reviews and ratings
- Advanced search & sorting
- Movie recommendations
- MongoDB integration
- Admin panel for movie management
- Responsive mobile design improvements

## License

MIT License

## Contact & Support

For issues, questions, or suggestions, please create an issue in the repository.

---

**Happy movie watching! 🎬🍿**
