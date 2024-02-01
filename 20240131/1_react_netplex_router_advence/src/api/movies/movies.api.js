const TMDB_ACCESS_TOKEN = process.env.REACT_APP_TMDB_ACCESS_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
};

export const getMovies = async (type) => {
  const endPoints = {
    nowPlaying:
      "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1&region=KR",
    topRated:
      "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1&region=KR",
  };

  const response = await fetch(endPoints[type], options);
  const data = await response.json();
  const movies = data.results;
  return movies;
};

export const getDetailMovie = async (movieId) => {
  const detailMovieEndPoint = "https://api.themoviedb.org/3/movie/";
  const response = await fetch(
    `${detailMovieEndPoint}${movieId}?language=ko-KR`,
    options,
  );
  const data = await response.json();
  return data;
};

const moviesAPI = {
  getMovies,
  getDetailMovie,
  imageOrigin: "https://image.tmdb.org/t/p/w500",
};

export default moviesAPI;
