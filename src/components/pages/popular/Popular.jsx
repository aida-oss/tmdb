import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../movieCard/MovieCard";
import { MovieContext } from "../../context";

const Popular = () => {
  const {language} = useContext(MovieContext)
  const [popular, setPopular] = useState([]);

  async function getPopular() {
    let res = await axios(`
      https://api.themoviedb.org/3/movie/popular?api_key=45d1d56fc54beedb6c0207f9ac6cab7c&language=${language}&page=1`);
    setPopular(res.data.results);
  }

  useEffect(() => {
    getPopular();
  }, [language]);

  return (
    <div className="popular">
      {popular.map((el) => (
        <MovieCard el={el} />
      ))}
    </div>
  );
};

export default Popular;
