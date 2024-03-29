import React, { useEffect, useState } from "react";
import { nowPlayingEndpoint, topRatedEndpoint, getMovies } from "./util";
import RenderItem from "../RenterItem";

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
