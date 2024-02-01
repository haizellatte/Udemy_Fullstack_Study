import React from "react";
import styled from "styled-components";
import { useProfile } from "../../../contexts/Profile.context";
import Item from "../../movies/Item/Item";

function LikeList() {
  const { likedMovies } = useProfile();

  return (
    <div>
      <h2>찜한 목록</h2>
      <LikeContainer>
        {likedMovies.map((movie, i) => (
          <Item
            key={`${movie}-${i}`}
            moviesInfo={{
              movieId: movie.movieId,
              title: movie.title,
              imgSrc: movie.imgSrc,
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
