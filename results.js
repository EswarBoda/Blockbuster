document.addEventListener("DOMContentLoaded", () => {
    let storedMovieMatches = localStorage.getItem("movie-matches");
    let storedGameMatches = localStorage.getItem("game-matches");
    let movieMatches = [];
    let gameMatches = [];

    // variable names to modify later
    let genre = '';
    let year = '';
    let movieTitleEl = '';
    let gameTitleEl = '';

    function displayMovieInfo() {
        const movieResultsObjReadFromLocalStorage = JSON.parse(localStorage.getItem("Stored-Movie-Answers"));
        genre = movieResultsObjReadFromLocalStorage.genre;
        year = movieResultsObjReadFromLocalStorage.year;
        console.log('movieResultsObjReadFromLocalStorage: ', movieResultsObjReadFromLocalStorage);
        
        const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=`;
        const movieURL = `${BASE_URL}${MDB_API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&primary_release_year=${year}`;
        console.log(movieURL);
        fetch(movieURL)
        .then(function(data) {
            return data.json();
        })
        .then(function(responseJson) {
            console.log(responseJson.results);
            if (responseJson.total_results > 0) { // check for no results
                const moviePosterFilePath = `https://image.tmdb.org/t/p/original${responseJson.results[0].poster_path}`;
                
                // set the movie image poster path for the src element
                const movieImgEl = document.getElementById('movieposter');
                movieImgEl.src = moviePosterFilePath;

                // create movie title element, and add it before the poster element
                movieTitleEl = document.createElement('h2');
                movieTitleEl.innerText = `${responseJson.results[0].title}`;
                document.getElementById('movieinfo').insertBefore(movieTitleEl, movieImgEl);

                // create movie release date element
                const releaseEl = document.createElement('h2');
                releaseEl.innerText = `${responseJson.results[0].release_date}`;
                document.getElementById('movieinfo').appendChild(releaseEl);

                // create movie overview element
                const overviewEl = document.createElement('p');
                overviewEl.innerText = `Overview: ${responseJson.results[0].overview}`;
                document.getElementById('movieinfo').appendChild(overviewEl);
            } else {
                console.log('No movies were found matching the user selection criteria, retrying with year 2019');
            }
        })
    }

    displayMovieInfo();

    // Display game info in the results page
    function displayGameInfo() {
        const gameResultsObjReadFromLocalStorage = JSON.parse(localStorage.getItem("Stored-Game-Answers"));
        console.log('gameResultsObjReadFromLocalStorage: ', gameResultsObjReadFromLocalStorage);
        const playerType = gameResultsObjReadFromLocalStorage.playerType;
        const platform = gameResultsObjReadFromLocalStorage.platform;
        let year = gameResultsObjReadFromLocalStorage.year;
        
        const BASE_URL = `https://api.rawg.io/api/games?key=`;
        const gameURL = `${BASE_URL}${RAWG_API_KEY}&platforms=${platform}&tags=${playerType}&dates=${year}-01-01,${year}-11-30&page=1&page_size=5`;
        console.log(gameURL);

        fetch(gameURL)
        .then(function(data) {
            return data.json();
        })
        .then(function(responseJson) {
            console.log(responseJson.results);
            if (responseJson.count > 0) { // check for no results
                const gamePosterFilePath = responseJson.results[0].background_image;
                
                // set the game image poster path for the src element
                const gameImgEl = document.getElementById('gameposter');
                gameImgEl.src = gamePosterFilePath;

                // create game title element, and add it before the poster element
                gameTitleEl = document.createElement('h2');
                gameTitleEl.innerText = `${responseJson.results[0].name}`;
                document.getElementById('gameinfo').insertBefore(gameTitleEl, gameImgEl);

                // create game release date element
                const releaseEl = document.createElement('h2');
                releaseEl.innerText = `${responseJson.results[0].released}`;
                document.getElementById('gameinfo').appendChild(releaseEl);

                // create game rating element
                const ratingEl = document.createElement('p');
                ratingEl.innerText = `Rating: ${responseJson.results[0].rating}`;
                document.getElementById('gameinfo').appendChild(ratingEl);
            } else {
                console.log('No games were found matching the user selection criteria, retrying with year 2019');
            }
        })
    }

    displayGameInfo();

    // Add event listener for the #save-movie button
    const saveMovieBtnEl = document.getElementById('save-movie');
    saveMovieBtnEl.addEventListener('click', () => {
        let movieTitle = movieTitleEl.innerText;
        // check that movieTitle is not empty, and is not already added to the movieMatches
        if (movieTitle && !movieMatches.includes(movieTitle)) {
            movieMatches.push(movieTitle);
            storedMovieMatches = JSON.stringify(movieMatches);
            localStorage.setItem("movie-matches", storedMovieMatches);
        }
    })

    // Add event listener for the #save-game button
    const saveGameBtnEl = document.getElementById('save-game');
    saveGameBtnEl.addEventListener('click', () => {
        let gameTitle = gameTitleEl.innerText;
        // check that gameTitle is not empty, and is not already added to the movieMatches
        if (gameTitle && !gameMatches.includes(gameTitle)) {
            gameMatches.push(gameTitle);
            storedGameMatches = JSON.stringify(gameMatches);
            localStorage.setItem("game-matches", storedGameMatches);
        }
    })
})
