import React, { useEffect, useState } from "react";
import { nowPlayingEndpoint, topRatedEndpoint, options } from "./util";
import RenderItem from "../RenterItem";

const getMovies = async (endpoint) => {
  const response = await fetch(endpoint, options);
  const data = await response.json();
  return data.results;
};

function ItemList() {
  const [nowPlayingData, setNowPlayingData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);

  const render = async () => {
    setNowPlayingData(await getMovies(nowPlayingEndpoint));
    setTopRatedData(await getMovies(topRatedEndpoint));
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
