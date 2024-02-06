const Authorization =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjdiMTJjM2M2NjhiMjNjZThhNmNhMjFiYTE5M2JjYiIsInN1YiI6IjY1YTlkNjZjNTM0NjYxMDEzOGNkMTFhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SYgTW92CkzlWhUcTXHe5m8wIx6jYWHxLcrTLcMwFbQ4";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: Authorization,
  },
};

export const nowPlayingEndpoint =
  "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1&region=KR";

export const topRatedEndpoint =
  "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1&region=KR";

export const imageOrigin = "https://image.tmdb.org/t/p/w500";

export const getMovies = async (endpoint) => {
  const response = await fetch(endpoint, options);
  const data = await response.json();
  return data.results;
};
