const nowPlayingEndpoint =
  "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1&region=KR";
const topRatedEndpoint =
  "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1&region=KR";
const imageOrigin = "https://image.tmdb.org/t/p/w500";

const getMovies = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjdiMTJjM2M2NjhiMjNjZThhNmNhMjFiYTE5M2JjYiIsInN1YiI6IjY1YTlkNjZjNTM0NjYxMDEzOGNkMTFhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SYgTW92CkzlWhUcTXHe5m8wIx6jYWHxLcrTLcMwFbQ4",
    },
  };

  const response = await fetch(endpoint, options);
  const data = await response.json();
  const movies = data.results;

  return movies;
};

const main = async () => {
  //! promiseAll 사용하는 방법
  // const getNowPlayingMoviespromise = getMovies(nowPlayingEndpoint);
  // const getTopRatedMoviespromise = getMovies(topRatedEndpoint);

  // const [nowPlayingMovies, topRatedMovies] = Promise.all([
  //   getNowPlayingMoviespromise,
  //   getTopRatedMoviespromise,
  // ]);

  const nowPlayingMovies = await getMovies(nowPlayingEndpoint);
  renderMovies(nowPlayingMovies, "now-playing-movies-list");

  const topRatedMovies = await getMovies(topRatedEndpoint);
  renderMovies(topRatedMovies, "top-rated-movies-list");
};

const renderMovies = (movies, parentNodeId) => {
  const moviesListEl = document.getElementById(parentNodeId);

  movies.forEach((movie) => {
    const movieEl = document.createElement("li");

    movieEl.className = "movies-list-item";
    movieEl.innerHTML = `
      <img
        class="movies-list-item-img"
        src="${imageOrigin}${movie.backdrop_path}"
        alt="${movie.title}" />
      <h6 class="movies-list-item-title">${movie.title}</h6>
    `;

    moviesListEl.appendChild(movieEl);
  });
};

main();
