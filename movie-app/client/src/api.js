import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getMovies = async (filters = {}) => {
  const params = new URLSearchParams();
  
  if (filters.genre) params.append('genre', filters.genre);
  if (filters.language) params.append('language', filters.language);
  if (filters.year) params.append('year', filters.year);
  if (filters.category) params.append('category', filters.category);

  const response = await axios.get(`${API_BASE_URL}/movies?${params}`);
  return response.data;
};

export const getGenres = async () => {
  const response = await axios.get(`${API_BASE_URL}/movies/filters/genres`);
  return response.data;
};

export const getLanguages = async () => {
  const response = await axios.get(`${API_BASE_URL}/movies/filters/languages`);
  return response.data;
};

export const getYears = async () => {
  const response = await axios.get(`${API_BASE_URL}/movies/filters/years`);
  return response.data;
};

export const getMovieById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/movies/${id}`);
  return response.data;
};
