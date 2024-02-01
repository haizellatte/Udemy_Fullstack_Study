import React from "react";
import styled from "styled-components";
import Item from "../Item/Item";
import api from "../../api/api";

function RenderItem({ title, movies }) {
  return (
    <>
      <Title>{title}</Title>
      <ItemContainer>
        {movies.map((movie, i) => (
          <Item
            key={`${movie}-${i}`}
            imgSrc={`${api.movie.imageOrigin}${movie.backdrop_path}`}
            title={movie.title}
          />
        ))}
      </ItemContainer>
    </>
  );
}

export default RenderItem;

const ItemContainer = styled.div`
  display: flex;
  column-gap: 15px;
  margin-bottom: 100px;
  overflow-x: auto;
  padding-bottom: 30px;
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    box-shadow: inset 2px 3px 4px gray;
  }
  &::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 2px #2f3542;
  }
`;

const Title = styled.div`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 32px;
`;
