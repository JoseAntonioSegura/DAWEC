document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "fafe027a9ae5accf89117c7887357fd1";
    const baseURL = "https://api.themoviedb.org/3";
    const searchForm = document.getElementById("search-form");
    const resultsContainer = document.getElementById("results-container");
    const apiKeyQueryParam = `api_key=${apiKey}`;
    let favoritesList = [];
    let currentPage = 1;

    // Función para realizar la búsqueda de películas
    function searchMovies(query, genre, page = 1) {
        const searchQuery = query ? `&query=${encodeURIComponent(query)}` : '';
        const genreQuery = genre !== "0" ? `&with_genres=${genre}` : '';
        const pageQuery = `&page=${page}`;

        const searchURL = query
            ? `${baseURL}/search/movie?${apiKeyQueryParam}${searchQuery}${genreQuery}${pageQuery}`
            : `${baseURL}/discover/movie?${apiKeyQueryParam}${genreQuery}${pageQuery}`;

        fetch(searchURL)
            .then(response => response.json())
            .then(data => {
                if (query && genre !== "0") {
                    const moviesWithGenre = data.results.filter(movie => movie.genre_ids.includes(parseInt(genre)));
                    if (moviesWithGenre.length === 0) {
                        resultsContainer.innerHTML = "No se encontraron resultados para el nombre y género seleccionados.";
                        return;
                    }
                    displayResults(moviesWithGenre);
                } else {
                    if (page === 1) {
                        resultsContainer.innerHTML = ""; // Limpiar resultados anteriores solo en la primera página
                    }
                    displayResults(data.results);

                    // Agregar la funcionalidad de "Cargar más"
                    if (data.results.length >= 20) { // Cambiar 20 al número deseado de resultados por página
                        const loadMoreButton = createLoadMoreButton(query, genre, page + 1);
                        resultsContainer.appendChild(loadMoreButton);
                    }
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }

    // Función para mostrar los resultados en la interfaz
    function displayResults(results) {
        if (results.length === 0) {
            resultsContainer.innerHTML = "No se encontraron resultados.";
            return;
        }

        results.forEach(movie => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie");

            const title = document.createElement("h3");
            title.textContent = movie.title;

            const releaseYear = document.createElement("p");
            releaseYear.textContent = `Año de lanzamiento: ${movie.release_date.split("-")[0]}`;

            const overview = document.createElement("p");
            overview.textContent = movie.overview;

            const rating = document.createElement("p");
            rating.textContent = `Puntuación: ${movie.vote_average}`;

            // Agregar la imagen de la película
            if (movie.poster_path) {
                const img = document.createElement("img");
                img.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
                img.alt = `${movie.title} Poster`;
                movieElement.appendChild(img);
            }

            movieElement.appendChild(title);
            movieElement.appendChild(releaseYear);
            movieElement.appendChild(overview);
            movieElement.appendChild(rating);

            resultsContainer.appendChild(movieElement);
        });
    }

    // Función para crear el botón "Cargar más"
    function createLoadMoreButton(query, genre, page) {
        const loadMoreButton = document.createElement("button");
        loadMoreButton.textContent = "Cargar más";
        loadMoreButton.addEventListener("click", () => loadMoreResults(query, genre, page));
        return loadMoreButton;
    }

    // Función para cargar más resultados
    function loadMoreResults(query, genre, page) {
        const loadMoreButton = document.querySelector("#results-container button");
        if (loadMoreButton) {
            loadMoreButton.remove(); // Eliminar el botón "Cargar más" anterior
        }
        searchMovies(query, genre, page);
    }

    // Función para agregar una película a la lista de favoritos
    function addToFavorites(movie) {
        favoritesList.push(movie);
        updateResults();
    }

    // Función para eliminar una película de la lista de favoritos
    function removeFromFavorites(movieId) {
        favoritesList = favoritesList.filter(movie => movie.id !== movieId);
        updateResults();
    }

    // Función para actualizar los resultados después de agregar o eliminar de favoritos
    function updateResults() {
        searchMovies(document.getElementById("search-input").value, document.getElementById("genre-select").value);
    }

    // Manejar el envío del formulario de búsqueda
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const query = document.getElementById("search-input").value;
        const genre = document.getElementById("genre-select").value;

        searchMovies(query, genre);
    });
});
