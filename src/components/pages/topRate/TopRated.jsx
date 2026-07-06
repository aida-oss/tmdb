import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import MovieCard from '../movieCard/MovieCard';
import { MovieContext } from '../../context';

const TopRated = () => {
  const {language} = useContext(MovieContext)
    const [topRated, setTopRated] = useState([]);

    async function getTopRated() {
        let res = await axios (`
           https://api.themoviedb.org/3/movie/top_rated?api_key=45d1d56fc54beedb6c0207f9ac6cab7c&language=${language}&page=1`)
        setTopRated(res.data.results);
    }

    useEffect(() => {
        getTopRated();
    }, [language])
  return (
      <div className='popular'>
      {topRated.map((el) => (
        <MovieCard el={el}/>
      ))}
    </div>
  )
}

export default TopRated
