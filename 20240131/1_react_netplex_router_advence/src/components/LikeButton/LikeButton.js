import React from "react";
import styled from "styled-components";
import { useProfile } from "../../contexts/Profile.context";
import heart from "../../assets/white_heart.png";
import red_heart from "../../assets/red_heart.png";

function LikeButton({ moviesInfo }) {
  const { likedMovies, setLikedMovies } = useProfile();

  const ids = likedMovies.filter((movie) => movie.movieId);

  const handleLikeMovie = () => {
    const newList = likedMovies.map((movie) =>
      ids.includes(movie.movieId)
        ? !movie.movieId
        : [...likedMovies, moviesInfo]
    );

    console.log("newList", newList);

    setLikedMovies(() => newList);
  };

  console.log("ids", ids);
  console.log("likedMovies", likedMovies);

  return (
    <LikeBtn
      src={heart}
      // src={likedMovies.has(moviesInfo.movieId) ? red_heart : heart}
      className="active"
      onClick={() => handleLikeMovie()}
    />
  );
}

export default LikeButton;

const LikeBtn = styled.img`
  margin-top: 15px;
  max-height: 25px;
  padding: 0 5px;
  border: none;
  cursor: pointer;
  transition: ease-in-out 0.3s;
`;

// import React from "react";
// import styled from "styled-components";
// import { useProfile } from "../../contexts/Profile.context";
// import heart from "../../assets/white_heart.png";
// import red_heart from "../../assets/red_heart.png";

// function LikeButton({ moviesInfo }) {
//   const { likedMovies, setLikedMovies } = useProfile();

//   const handleLikeMovie = () => {
//     if (!likedMovies.has(moviesInfo.movieId)) {
//       setLikedMovies(() => new Set([...likedMovies, moviesInfo.movieId]));
//     } else {
//       setLikedMovies((prev) => {
//         const newSelect = new Set(prev);
//         newSelect.delete(moviesInfo.movieId);
//         return newSelect;
//       });
//     }
//   };

//   console.log(likedMovies);

//   return (
//     <LikeBtn
//       src={likedMovies.has(moviesInfo.movieId) ? red_heart : heart}
//       className="active"
//       onClick={() => handleLikeMovie(moviesInfo.movieId)}
//     />
//   );
// }

// export default LikeButton;

// const LikeBtn = styled.img`
//   margin-top: 15px;
//   max-height: 25px;
//   padding: 0 5px;
//   border: none;
//   cursor: pointer;
//   transition: ease-in-out 0.3s;
// `;
