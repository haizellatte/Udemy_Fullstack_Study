import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import api from "../../api/api";
import getTMDBImgSrc from "../../utils/getTMDBImgSrc";
import LikeButton from "../../components/LikeButton/LikeButton";

function MoviesDetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    api.movies.getDetailMovie(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  if (movie === null) return null;

  console.log(movie);

  return (
    <Wrapper>
      <BlurBackground imageUrl={getTMDBImgSrc(movie.backdrop_path)} />
      <MainInfoContainer>
        <PosterImg src={getTMDBImgSrc(movie.poster_path)} alt={movie.title} />
        <div className="main-info-right">
          <div className="main-info-right-head">
            <h1>{movie?.title}</h1>
            <LikeButton
              moviesInfo={{
                movieId: movie.id,
                title: movie.title,
                imgSrc: getTMDBImgSrc(movie.backdrop_path),
              }}
            />
          </div>
          <Overview>{movie?.overview}</Overview>
          <KeywordContent>
            {movie.genres?.map((genre) => (
              <KeywordSpan key={genre.id}>{genre.name}</KeywordSpan>
            ))}
          </KeywordContent>
          <VoteContainer>
            <p>
              평점
              <strong>{movie.vote_average}</strong>
            </p>
          </VoteContainer>
        </div>
      </MainInfoContainer>
    </Wrapper>
  );
}

export default MoviesDetailPage;

const Wrapper = styled.div`
  height: 100vh;
  margin: 0 auto;
`;

const BlurBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: cover;
  filter: blur(5px);
  opacity: 0.2;
  z-index: 1;
`;

const PosterImg = styled.img`
  width: 340px;
  height: 510px;
  border-radius: 15px;
  box-shadow: 5px 7px 7px black;
`;

const VoteContainer = styled.div`
  font-size: 18px;
  color: white;
  margin-top: 14px;
  > p > strong {
    font-size: 22px;
    color: dodgerblue;
    margin-left: 7px;
    font-family: "Hahmlet", serif;
  }
`;

const Overview = styled.p`
  background-color: #414141;
  padding: 20px;
  border-radius: 8px;
  line-height: 25px;
  text-align: justify;
  font-size: 20px;
  line-height: 1.6;
  letter-spacing: 1px;
  margin-top: 30px;
  font-family: "Hahmlet", serif;
`;

const MainInfoContainer = styled.div`
  display: flex;
  .main-info-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 10px;
  }
  .main-info-right-head {
    display: flex;
    justify-content: space-between;
    > h1 {
      font-family: "Hahmlet", serif;
      font-size: 48px;
    }
  }
`;

const KeywordContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 15px;
`;

const KeywordSpan = styled.li`
  color: #fed330;
  border: 1px solid #fed330;
  background-color: transparent;
  padding: 7px 15px;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  font-size: 17px;
  border-radius: 5px;
  list-style: none;
  font-family: "Hahmlet", serif;
`;
