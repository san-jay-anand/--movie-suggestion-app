const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Load movies from JSON file
const moviesPath = path.join(__dirname, '../data/movies.json');
const getMovies = () => {
  const data = fs.readFileSync(moviesPath, 'utf-8');
  return JSON.parse(data);
};

// Get all movies with optional filtering
router.get('/', (req, res) => {
  try {
    let movies = getMovies();
    const { genre, language, year, category } = req.query;

    // Filter by genre
    if (genre) {
      const genreArray = genre.split(',').map(g => g.trim());
      movies = movies.filter(movie =>
        genreArray.some(g => movie.genre.includes(g))
      );
    }

    // Filter by language
    if (language) {
      const langArray = language.split(',').map(l => l.trim());
      movies = movies.filter(movie => langArray.includes(movie.language));
    }

    // Filter by year
    if (year) {
      const yearValue = parseInt(year);
      movies = movies.filter(movie => movie.year === yearValue);
    }

    // Filter by category (old, new, trending)
    if (category) {
      const catArray = category.split(',').map(c => c.trim());
      movies = movies.filter(movie => catArray.includes(movie.category));
    }

    // Sort by rating (highest first)
    movies.sort((a, b) => b.rating - a.rating);

    res.json({
      success: true,
      count: movies.length,
      data: movies
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Get a single movie by ID
router.get('/:id', (req, res) => {
  try {
    const movies = getMovies();
    const movie = movies.find(m => m.id === parseInt(req.params.id));

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: 'Movie not found'
      });
    }

    res.json({
      success: true,
      data: movie
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Get available genres
router.get('/filters/genres', (req, res) => {
  try {
    const movies = getMovies();
    const genres = [...new Set(movies.flatMap(m => m.genre))].sort();
    res.json({
      success: true,
      data: genres
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Get available languages
router.get('/filters/languages', (req, res) => {
  try {
    const movies = getMovies();
    const languages = [...new Set(movies.map(m => m.language))].sort();
    res.json({
      success: true,
      data: languages
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Get available years
router.get('/filters/years', (req, res) => {
  try {
    const movies = getMovies();
    const years = [...new Set(movies.map(m => m.year))].sort((a, b) => b - a);
    res.json({
      success: true,
      data: years
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
