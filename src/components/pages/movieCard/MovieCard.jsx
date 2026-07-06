import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom'

const MovieCard = ({ el }) => {
  return (
    <div>
      <div className="kinoCard">
        <div className="imgWrap">
          <Link to={`/moveDetails/${el.id}`}>
        <img src={`https://image.tmdb.org/t/p/w440_and_h660_face/${el.poster_path}`} alt=""
        width={200} />
        </Link>
        </div>
        {el.title}
      </div>
    </div>
  )
}

export default MovieCard
