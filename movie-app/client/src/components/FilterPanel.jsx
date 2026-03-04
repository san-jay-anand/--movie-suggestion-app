import React, { useState, useEffect } from 'react';
import { getGenres, getLanguages, getYears } from '../api';
import '../styles/FilterPanel.css';

const FilterPanel = ({ onFilterChange }) => {
  const [genres, setGenres] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    genre: [],
    language: [],
    year: [],
    category: []
  });

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const [genresData, languagesData, yearsData] = await Promise.all([
          getGenres(),
          getLanguages(),
          getYears()
        ]);
        setGenres(genresData.data || []);
        setLanguages(languagesData.data || []);
        setYears(yearsData.data || []);
      } catch (error) {
        console.error('Error fetching filters:', error);
      }
    };
    fetchFilters();
  }, []);

  const handleFilterChange = (filterType, value) => {
    const updatedFilters = { ...selectedFilters };
    const filterArray = updatedFilters[filterType];

    if (filterArray.includes(value)) {
      updatedFilters[filterType] = filterArray.filter(item => item !== value);
    } else {
      updatedFilters[filterType] = [...filterArray, value];
    }

    setSelectedFilters(updatedFilters);

    // Build query string
    const queryFilters = {
      genre: updatedFilters.genre.join(',') || '',
      language: updatedFilters.language.join(',') || '',
      year: updatedFilters.year.join(',') || '',
      category: updatedFilters.category.join(',') || ''
    };

    onFilterChange(queryFilters);
  };

  const resetFilters = () => {
    setSelectedFilters({
      genre: [],
      language: [],
      year: [],
      category: []
    });
    onFilterChange({
      genre: '',
      language: '',
      year: '',
      category: ''
    });
  };

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h2>🎬 Filters</h2>
        <button className="reset-btn" onClick={resetFilters}>
          Reset All
        </button>
      </div>

      {/* Category Filter */}
      <div className="filter-section">
        <h3>Category</h3>
        <div className="filter-options">
          {['new', 'trending', 'old'].map(cat => (
            <label key={cat} className="filter-label">
              <input
                type="checkbox"
                checked={selectedFilters.category.includes(cat)}
                onChange={() => handleFilterChange('category', cat)}
              />
              <span>{cat.toUpperCase()}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Genre Filter */}
      <div className="filter-section">
        <h3>Genre</h3>
        <div className="filter-options">
          {genres.map(genre => (
            <label key={genre} className="filter-label">
              <input
                type="checkbox"
                checked={selectedFilters.genre.includes(genre)}
                onChange={() => handleFilterChange('genre', genre)}
              />
              <span>{genre}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Language Filter */}
      <div className="filter-section">
        <h3>Language</h3>
        <div className="filter-options">
          {languages.map(language => (
            <label key={language} className="filter-label">
              <input
                type="checkbox"
                checked={selectedFilters.language.includes(language)}
                onChange={() => handleFilterChange('language', language)}
              />
              <span>{language}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Year Filter */}
      <div className="filter-section">
        <h3>Year</h3>
        <div className="filter-options">
          {years.map(year => (
            <label key={year} className="filter-label">
              <input
                type="checkbox"
                checked={selectedFilters.year.includes(year.toString())}
                onChange={() => handleFilterChange('year', year.toString())}
              />
              <span>{year}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
