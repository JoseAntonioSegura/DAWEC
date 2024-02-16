// src/components/BuscadorPeliculas.js
import React, { useState } from 'react';

const BuscadorPeliculas = ({ apiKey }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchMovies = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
      const data = await response.json();

      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (error) {
      setError('Error fetching data');
    }

    setLoading(false);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchMovies();
        }}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar películas..."
        />
        <button type="submit">Buscar</button>
      </form>

      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      <div className="movies-container">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-details">
              <h2>{movie.Title}</h2>
              <p>Año: {movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuscadorPeliculas;

