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

                // Ejemplo de cómo agregar películas a la lista de favoritos
                data.results.forEach(movie => {
                    if (favoritesList.some(favorite => favorite.id === movie.id)) {
                        movie.isFavorite = true;
                    } else {
                        movie.isFavorite = false;
                    }
                });

                displayResults(data.results);
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

            // Agregar botón "Agregar a favoritos" o "Eliminar de favoritos"
            const favoriteButton = document.createElement("button");
            favoriteButton.textContent = movie.isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos";
            favoriteButton.classList.add("add-to-favorites");
            favoriteButton.dataset.movieId = movie.id;
            favoriteButton.addEventListener("click", () => toggleFavorite(movie));

            movieElement.appendChild(title);
            movieElement.appendChild(releaseYear);
            movieElement.appendChild(overview);
            movieElement.appendChild(rating);
            movieElement.appendChild(favoriteButton);

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

    // Función para agregar o eliminar una película de la lista de favoritos
    function toggleFavorite(movie) {
        if (favoritesList.some(favorite => favorite.id === movie.id)) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }

    // Función para agregar una película a la lista de favoritos
    function addToFavorites(movie) {
        favoritesList.push(movie);
        updateResults();
        addMovieToList(movie.id); // Llamada a la función para agregar a la lista en TMDb
    }

    // Función para eliminar una película de la lista de favoritos
    function removeFromFavorites(movieId) {
        favoritesList = favoritesList.filter(movie => movie.id !== movieId);
        updateResults();
        removeMovieFromList(movieId); // Llamada a la función para eliminar de la lista en TMDb
    }

    // Función para agregar una película a la lista en TMDb
    function addMovieToList(movieId) {
        const listId = YOUR_LIST_ID; // Reemplaza con el ID de tu lista en TMDb
        const session_id = "TU_SESSION_ID"; // Reemplaza con tu session_id

        const addURL = `${baseURL}/list/${listId}/add_item?${apiKeyQueryParam}&session_id=${session_id}`;

        const requestBody = {
            media_id: movieId,
        };

        fetch(addURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then(response => response.json())
            .then(data => console.log("Movie added to list:", data))
            .catch(error => console.error("Error adding movie to list:", error));
    }

    // Función para eliminar una película de la lista en TMDb
    function removeMovieFromList(movieId) {
        const listId = YOUR_LIST_ID; // Reemplaza con el ID de tu lista en TMDb
        const session_id = "TU_SESSION_ID"; // Reemplaza con tu session_id

        const removeURL = `${baseURL}/list/${listId}/remove_item?${apiKeyQueryParam}&session_id=${session_id}`;

        const requestBody = {
            media_id: movieId,
        };

        fetch(removeURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then(response => response.json())
            .then(data => console.log("Movie removed from list:", data))
            .catch(error => console.error("Error removing movie from list:", error));
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
