import React, { useContext } from 'react'
import { MovieContext } from '../../context'
import { Link } from 'react-router-dom';
import './Fav.css'

const Fav = () => {
  const {favorite, setFavorite} = useContext(MovieContext)
  console.log(favorite);
  


  function deleteFavorite(item) {
    let res = favorite.filter((el) => el.id !== item);
    setFavorite(res);
    localStorage.setItem('favorite', JSON.stringify(res))
  }


  return (
    <div id='favorite'>
      <div className="context">
        <div className="popular">
          {favorite.map((el) => (
            <div className="popularCard">
              <Link to={`/moveDetails/${el.id}`}>
              <img src={`https://image.tmdb.org/t/p/w440_and_h660_face/${el.poster_path}`} alt="" 
              width={200}/>
              </Link>
              <h2>{el.title}</h2>
              <button onClick={() => deleteFavorite(el.id)}>delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Fav
