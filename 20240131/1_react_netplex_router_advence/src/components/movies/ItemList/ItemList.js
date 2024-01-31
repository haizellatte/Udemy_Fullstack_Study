import React, { useEffect, useState } from "react";
import RenderItem from "../RenterItem";
import api from "../../../api/api";
import styled from "styled-components";

function ItemList() {
  const [nowPlayingData, setNowPlayingData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);

  const render = async () => {
    setNowPlayingData(await api.movies.getMovies("nowPlaying"));
    setTopRatedData(await api.movies.getMovies("topRated"));
  };

  useEffect(() => {
    render();
  }, []);

  return (
    <>
      <RenderItem title="현재 상영작" movies={nowPlayingData} />
      <RenderItem title="평점이 높은 영화" movies={topRatedData} />
    </>
  );
}

export default ItemList;
