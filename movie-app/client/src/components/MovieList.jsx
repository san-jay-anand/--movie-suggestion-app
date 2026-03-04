import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

const MovieList = ({ movies, loading, error }) => {
  if (loading) {
    return <div className="movie-list-container">
      <div className="loading">Loading movies...</div>
    </div>;
  }

  if (error) {
    return <div className="movie-list-container">
      <div className="error">{error}</div>
    </div>;
  }

  if (movies.length === 0) {
    return <div className="movie-list-container">
      <div className="no-results">No movies found. Try adjusting your filters!</div>
    </div>;
  }

  return (
    <div className="movie-list-container">
      <div className="movies-count">
        Found {movies.length} movie{movies.length !== 1 ? 's' : ''}
      </div>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
