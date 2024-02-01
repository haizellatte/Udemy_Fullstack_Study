import React from "react";
import styled from "styled-components";
import { useProfile } from "../../contexts/Profile.context";
import heart from "../../assets/white_heart.png";
import red_heart from "../../assets/red_heart.png";

function LikeButton({ moviesInfo }) {
  const { setLikedMovies, likedMoviesId, setLikedMoviesId } = useProfile();

  const handleLikeMovie = () => {
    if (!likedMoviesId.has(moviesInfo.movieId)) {
      setLikedMoviesId(() => new Set([...likedMoviesId, moviesInfo.movieId]));
      setLikedMovies((prev) => [...prev, moviesInfo]);
    } else {
      setLikedMoviesId((prev) => {
        const newSelect = new Set(prev);
        newSelect.delete(moviesInfo.movieId);
        return newSelect;
      });
      setLikedMovies((prev) => {
        const deleteLike = prev.filter(
          (movie) => movie.movieId !== moviesInfo.movieId,
        );
        return deleteLike;
      });
    }
  };

  return (
    <LikeBtn
      src={likedMoviesId.has(moviesInfo?.movieId) ? red_heart : heart}
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
