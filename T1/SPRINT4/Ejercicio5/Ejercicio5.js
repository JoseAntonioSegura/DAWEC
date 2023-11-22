document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "fafe027a9ae5accf89117c7887357fd1";
    const baseURL = "https://api.themoviedb.org/3";
    const searchForm = document.getElementById("search-form");
    const resultsContainer = document.getElementById("results-container");
    const apiKeyQueryParam = `api_key=${apiKey}`;
    let favoritesList = [];
    let listId = 8279791; 
    let currentPage = 1;
    let session_id; // Variable global para almacenar la session_id
    let loadMoreButton;

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
                getFavoriteMovies();
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

    
    // Obtén y muestra las películas favoritas al cargar la página
    function getFavoriteMovies() {
        const getFavoritesURL = `${baseURL}/list/${listId}?${apiKeyQueryParam}&session_id=${session_id}`;
    
        fetch(getFavoritesURL)
            .then(response => response.json())
            .then(data => {
                favoritesList = [...new Set(data.items)]; // Filtrar duplicados
                displayFavoriteMovies();
            })
            .catch(error => console.error("Error fetching favorite movies:", error));
    }
    

    // Muestra las películas favoritas en el elemento "favorite-list"
    function displayFavoriteMovies() {
    const favoriteListContainer = document.getElementById("favorite-list");
    favoriteListContainer.innerHTML = ""; // Limpiar el contenido existente

    if (favoritesList.length === 0) {
        favoriteListContainer.innerHTML = "No hay películas favoritas.";
        return;
    }

    favoritesList.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("pelicula");

        const title = document.createElement("h3");
        title.textContent = movie.original_title;

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

        const removeButton = document.createElement("button");
        removeButton.textContent = "Eliminar de favoritos";
        removeButton.style.backgroundColor = "red";
        removeButton.style.position = "absolute";
        removeButton.style.bottom = "0px";
        removeButton.style.right = "20px";
        removeButton.addEventListener("click", () => removeFromFavorites(movie.id));

        movieElement.appendChild(title);
        movieElement.appendChild(releaseYear);
        movieElement.appendChild(overview);
        movieElement.appendChild(rating);
        movieElement.appendChild(removeButton);

        favoriteListContainer.appendChild(movieElement);
    });
}


    // Llama a la función para obtener y mostrar las películas favoritas al cargar la página
    getFavoriteMovies();
    
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
            .then(data => {
                console.log("Movie added to list:", data);
            })
            .catch(error => {
                console.error("Error adding movie to list:", error);
                throw error; // Propaga el error para que pueda ser capturado por la promesa externa
            });
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
            favoriteButton.classList.add("add-to-favorites");
            favoriteButton.dataset.movieId = movie.id;
            favoriteButton.addEventListener("click", () => toggleFavorite(movie));
    
            // Verifica si la película está en la lista de favoritos
            if (favoritesList.some(favorite => favorite.id === movie.id)) {
                favoriteButton.textContent = "Eliminar de favoritos";
                favoriteButton.style.backgroundColor = "red"; // Cambiar el color de fondo a rojo
            } else {
                favoriteButton.textContent = "Agregar a favoritos";
                favoriteButton.style.backgroundColor = ""; // Restablecer el color de fondo
            }
    
            movieElement.appendChild(title);
            movieElement.appendChild(releaseYear);
            movieElement.appendChild(overview);
            movieElement.appendChild(rating);
            movieElement.appendChild(favoriteButton);
    
            resultsContainer.appendChild(movieElement);
        });
    }

    function createLoadMoreButton(query, genre, page) {
        loadMoreButton = document.createElement("button"); // Asignar la referencia al botón global
        loadMoreButton.textContent = "Cargar más";
        loadMoreButton.addEventListener("click", () => loadMoreResults(query, genre, page));
        return loadMoreButton;
    }

    function loadMoreResults(query, genre, page) {
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
        if (session_id) {
            if (!favoritesList.some(favorite => favorite.id === movie.id)) {
                addMovieToList(movie.id)
                    .then(() => {
                        favoritesList.push(movie);
                        updateResults();
                        getFavoriteMovies(); // Actualizar la lista de favoritos
                    })
                    .catch(error => console.error("Error adding movie to list:", error));
            } else {
                console.log("La película ya está en la lista de favoritos.");
            }
        } else {
            console.log("Usuario no autenticado.");
        }
    }
    
    function removeFromFavorites(movieId) {
        if (session_id) {
            if (favoritesList.some(favorite => favorite.id === movieId)) {
                removeMovieFromList(movieId)
                    .then(() => {
                        favoritesList = favoritesList.filter(movie => movie.id !== movieId);
                        updateResults();
                        getFavoriteMovies(); // Actualizar la lista de favoritos
                    })
                    .catch(error => console.error("Error removing movie from list:", error));
            } else {
                console.log("La película no está en la lista de favoritos.");
            }
        } else {
            console.log("Usuario no autenticado.");
        }
    }
    
    
    
    function addMovieToList(movieId) {
        const listId = 8279791;
        const addURL = `${baseURL}/list/${listId}/add_item?${apiKeyQueryParam}&session_id=${session_id}`;
    
        const requestBody = {
            media_id: movieId,
        };
    
        return fetch(addURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then(response => response.json())
            .then(data => {
                console.log("Movie added to list:", data);
            })
            .catch(error => {
                console.error("Error adding movie to list:", error);
                throw error; // Propaga el error para que pueda ser capturado por la promesa externa
            });
    }
    
    function removeMovieFromList(movieId) {
        const listId = 8279791;
        const removeURL = `${baseURL}/list/${listId}/remove_item?${apiKeyQueryParam}&session_id=${session_id}`;
        const requestBody = { media_id: movieId };
    
        return fetch(removeURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        })
            .then(response => response.json())
            .then(data => {
                console.log("Movie removed from list:", data);
            })
            .catch(error => {
                console.error("Error removing movie from list:", error);
                throw error; // Propaga el error para que pueda ser capturado por la promesa externa
            });
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