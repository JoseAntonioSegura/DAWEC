document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "fafe027a9ae5accf89117c7887357fd1";
    const baseURL = "https://api.themoviedb.org/3";
    const searchForm = document.getElementById("search-form");
    const resultsContainer = document.getElementById("results-container");
    const apiKeyQueryParam = `api_key=${apiKey}`;
    let favoritesList = [];
    let currentPage = 1;
    let session_id; // Variable global para almacenar la session_id

    function authenticateUser(apiKey) {
        const requestTokenURL = `${baseURL}/authentication/token/new?${apiKeyQueryParam}`;

        return fetch(requestTokenURL)
            .then(response => response.json())
            .then(data => {
                const requestToken = data.request_token;
                const authenticationURL = `https://www.themoviedb.org/authenticate/${requestToken}`;

                window.open(authenticationURL, "_blank");

                // Espera a que el usuario autorice el token y luego obtén la session_id
                return waitForUserAuthorization(requestToken);
            })
            .then(data => {
                session_id = data.session_id;
                console.log("session_id:", session_id);
            })
            .catch(error => console.error("Error obteniendo el código de solicitud:", error));
    }

    function waitForUserAuthorization(requestToken) {
        // Devuelve una promesa que se resolverá cuando el usuario haya autorizado el token
        return new Promise((resolve, reject) => {
            // Puedes ajustar el intervalo y el tiempo máximo de espera según tus necesidades
            const interval = setInterval(() => {
                // Verifica si la sesión ha sido creada
                fetch(`${baseURL}/authentication/session/new?${apiKeyQueryParam}&request_token=${requestToken}`, {
                    method: 'POST',
                })
                .then(response => response.json())
                .then(data => {
                    if (data.session_id) {
                        clearInterval(interval); // Detén la verificación continua
                        resolve(data);
                    }
                })
                .catch(error => reject(error));
            }, 1000); // Verifica cada segundo
        });
    }

    // Llamada a la función para autenticar al usuario
    authenticateUser(apiKey);

    function addMovieToList(movieId) {
        const listId = 8279791;

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

            if (movie.poster_path) {
                const img = document.createElement("img");
                img.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
                img.alt = `${movie.title} Poster`;
                movieElement.appendChild(img);
            }

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

    function createLoadMoreButton(query, genre, page) {
        const loadMoreButton = document.createElement("button");
        loadMoreButton.textContent = "Cargar más";
        loadMoreButton.addEventListener("click", () => loadMoreResults(query, genre, page));
        return loadMoreButton;
    }

      function loadMoreResults(query, genre, page) {
        const loadMoreButton = document.querySelector("#results-container button");
        if (loadMoreButton) {
            loadMoreButton.remove(); // Eliminar el botón "Cargar más" anterior
        }
        searchMovies(query, genre, page);
    }
    
    
    function toggleFavorite(movie) {
        if (favoritesList.some(favorite => favorite.id === movie.id)) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie);
        }
    }

    function addToFavorites(movie) {
        favoritesList.push(movie);
        updateResults();
        addMovieToList(movie.id);
    }

    function removeFromFavorites(movieId) {
        favoritesList = favoritesList.filter(movie => movie.id !== movieId);
        updateResults();
        removeMovieFromList(movieId);
    }

    function removeMovieFromList(movieId) {
        const removeURL = `${baseURL}/list/${listId}/remove_item?${apiKeyQueryParam}&session_id=${session_id}`;
        const requestBody = { media_id: movieId };

        fetch(removeURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        })
            .then(response => response.json())
            .then(data => console.log("Movie removed from list:", data))
            .catch(error => console.error("Error removing movie from list:", error));
    }

    function updateResults() {
        searchMovies(document.getElementById("search-input").value, document.getElementById("genre-select").value);
    }

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const query = document.getElementById("search-input").value;
        const genre = document.getElementById("genre-select").value;

        searchMovies(query, genre);
    });

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

                // Actualiza la variable currentPage
                currentPage = page;
            })
            .catch(error => console.error("Error fetching data:", error));
    }
});
