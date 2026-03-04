// Movie model (for reference - in JSON storage)
class Movie {
  constructor(
    id,
    title,
    genre,
    language,
    year,
    rating,
    description,
    director,
    category,
    posterUrl
  ) {
    this.id = id;
    this.title = title;
    this.genre = genre; // Array of genres
    this.language = language;
    this.year = year;
    this.rating = rating; // 1-10
    this.description = description;
    this.director = director;
    this.category = category; // 'old', 'new', 'trending'
    this.posterUrl = posterUrl;
  }
}

module.exports = Movie;
