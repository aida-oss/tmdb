import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api_key } from '../../../API';
import MovieCard from '../movieCard/MovieCard'

const Search = () => {
    const [search, setSearch] = useState([])
    let {kinoName} = useParams();
    async function getSearch(key) {
        let res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${kinoName}`)
        console.log(res);
        setSearch(res.data.results)
    }
    useEffect(() => {
      getSearch(api_key)
    }, [kinoName])
  return (
    <div className='popular'>
      {search.map((el) => (
        <MovieCard el={el}/>
      ))}
      
    </div>
  )
}

export default Search