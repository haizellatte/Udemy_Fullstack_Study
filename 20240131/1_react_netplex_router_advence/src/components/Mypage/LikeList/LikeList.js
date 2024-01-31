import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useProfile } from "../../../contexts/Profile.context";
import Item from "../../movies/Item/Item";
import api from "../../../api/api";

function LikeList() {
  const { likedMovies, setLikedMovies } = useProfile();
  // const [likedMovie, setLikedMovie] = useState([]);
  const likedMoviesList = [...likedMovies];

  useEffect(() => {
    likedMoviesList.filter((movieId) =>
      api.movies
        .getDetailMovie(movieId)
        .then((movie) =>
          setLikedMovies(() => new Set([...likedMovies, movieId]))
        )
    );
  }, []);

  const render = (id) => {
    const data = api.movies.getDetailMovie(id);

    return data;
  };

  console.log(likedMoviesList);

  return (
    <div>
      <h2>찜한 목록</h2>
      <LikeContainer>
        {likedMoviesList.map((movie, i) => (
          <Item
            key={`${movie}-${i}`}
            moviesInfo={{
              movieId: movie.movieId,
              // title: movie.title,
              title: render(movie.movieId).title,
              imgSrc: `${api.movies.imageOrigin}${movie.backdrop_path}`,
            }}
          />
        ))}
      </LikeContainer>
    </div>
  );
}

export default LikeList;

const LikeContainer = styled.div`
  display: flex;
  column-gap: 20px;
  overflow-x: auto;
`;

// {
//   likedMoviesList.map((movieId) =>
//     api.movies
//       .getLikedMovie(movieId)
//       .then(({ movieId, title, backdrop_path }) => {
//         return (
//           <Item
//             key={movieId}
//             moviesInfo={{
//               movieId: movieId,
//               title: title,
//               imgSrc: `${api.movies.imageOrigin}${backdrop_path}`,
//             }}
//           />
//         );
//       })
//   );
// }
