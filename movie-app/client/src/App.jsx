import React, { useState, useEffect } from 'react';
import FilterPanel from './components/FilterPanel';
import MovieList from './components/MovieList';
import { getMovies } from './api';
import './styles/App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    genre: '',
    language: '',
    year: '',
    category: ''
  });

  useEffect(() => {
    fetchMovies(filters);
  }, []);

  const fetchMovies = async (activeFilters) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getMovies(activeFilters);
      setMovies(response.data || []);
    } catch (err) {
      setError('Failed to fetch movies. Make sure the backend server is running on http://localhost:5000');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    fetchMovies(newFilters);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎬 Movie Suggestion App</h1>
        <p>Discover movies by Genre, Language, Year & More</p>
      </header>

      <div className="app-container">
        <aside className="sidebar">
          <FilterPanel onFilterChange={handleFilterChange} />
        </aside>
        <main className="main-content">
          <MovieList movies={movies} loading={loading} error={error} />
        </main>
      </div>
    </div>
  );
}

export default App;
