import React from "react";
import styled from "styled-components";
import Item from "../Item/Item";
import api from "../../../api/api";

function RenderItem({ title, movies }) {
  return (
    <Container>
      <Title>{title}</Title>
      <ItemContainer>
        {movies.map((movie, i) => (
          <Item
            key={`${movie}-${i}`}
            imgSrc={`${api.movies.imageOrigin}${movie.backdrop_path}`}
            moviesInfo={{
              movieId: movie.id,
              title: movie.title,
              imgSrc: `${api.movies.imageOrigin}${movie.backdrop_path}`,
            }}
          />
        ))}
      </ItemContainer>
    </Container>
  );
}

export default RenderItem;

const Container = styled.div`
  padding-top: 20px;
`;

const ItemContainer = styled.div`
  display: flex;
  column-gap: 20px;
  margin-bottom: 100px;
  overflow-x: auto;
  padding-bottom: 30px;
`;

const Title = styled.div`
  color: white;
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 32px;
  font-family: "Hahmlet", serif;
`;
