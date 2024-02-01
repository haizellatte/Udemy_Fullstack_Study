import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../../contexts/Auth.context";
import LikeButton from "../../LikeButton/LikeButton";

function Item({ moviesInfo }) {
  const { isLogin } = useAuth();
  const { movieId, imgSrc, title } = moviesInfo;

  return (
    <>
      <Container>
        <Link to={`/movies/${movieId}`}>
          <DetailContainer>
            <Img imageUrl={imgSrc} />
            <HoverSpan>자세히 보기</HoverSpan>
          </DetailContainer>
          <ContentContainer></ContentContainer>
        </Link>
        <TitleContainer>
          <Title>{title}</Title>
          {isLogin ? <LikeButton moviesInfo={moviesInfo} /> : null}
        </TitleContainer>
      </Container>
    </>
  );
}

export default Item;

const Container = styled.div`
  font-size: 13px;
  transition: 0.2s linear;
  font-family: "Nanum Gothic", sans-serif;
`;

const Img = styled.div`
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  width: 220px;
  height: 340px;
  background-size: cover;
  transition: 0.2s linear;
  border-radius: 7px;

  &:hover {
    background-size: cover;

    width: 380px;
  }
`;

const HoverSpan = styled.span`
  position: absolute;
  bottom: 150px;
  left: 50%;
  transform: translate(-50%);
  opacity: 0;
  transition: 0.2s linear;
  line-height: 1.8;
  font-size: 14px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  width: 48%;
  border-radius: 3px;
  transition: 0.3s;
`;

const DetailContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  border-radius: 7px;
  transition: 0.2s linear;
  &:hover {
    ${Img} {
      opacity: 0.3;
    }

    ${HoverSpan} {
      opacity: 1;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  color: white;
  font-size: 18px;
  margin-top: 12px;
  font-weight: bold;
  font-weight: 600;
`;
