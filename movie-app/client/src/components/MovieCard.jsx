import React from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  const getCategoryBadgeColor = (category) => {
    switch (category) {
      case 'new':
        return '#4CAF50';
      case 'trending':
        return '#FF6B6B';
      case 'old':
        return '#2196F3';
      default:
        return '#757575';
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.posterUrl} alt={movie.title} />
        <span
          className="category-badge"
          style={{ backgroundColor: getCategoryBadgeColor(movie.category) }}
        >
          {movie.category.toUpperCase()}
        </span>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-meta">
          <p className="movie-year">{movie.year}</p>
          <p className="movie-rating">⭐ {movie.rating}/10</p>
        </div>
        <p className="movie-director">
          <strong>Director:</strong> {movie.director}
        </p>
        <div className="movie-genres">
          {movie.genre.map((g) => (
            <span key={g} className="genre-tag">
              {g}
            </span>
          ))}
        </div>
        <p className="movie-language">
          <strong>Language:</strong> {movie.language}
        </p>
        <p className="movie-description">{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
