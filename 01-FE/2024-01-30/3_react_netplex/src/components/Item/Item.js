import React from "react";
import styled from "styled-components";

function Item({ imgSrc, title }) {
  return (
    <div>
      <ItemContainer>
        <Img src={imgSrc} />
        <Title>{title}</Title>
      </ItemContainer>
    </div>
  );
}

export default Item;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 250px;
  height: 150px;
`;

const Title = styled.div`
  margin-top: 15px;
  color: white;
  font-weight: 600;
`;
