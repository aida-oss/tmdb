import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";
import Videos from "../videos/Videos";
import Actors from "../actors/Actors";
import { MdOutlineFavorite } from "react-icons/md"
import { MovieContext } from "../../context";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const {favorite, setFavorite} = useContext(MovieContext)
  console.log(favorite);
  


  async function getMovieDetails() {
    let res = await axios(`
    https://api.themoviedb.org/3/movie/${movieId}?api_key=45d1d56fc54beedb6c0207f9ac6cab7c&language=en-US`);
    // console.log(res.data);
    setMovieDetails(res.data);
  }


  function addToFavorite(movie) {
  const isAlreadyFavorite = favorite.some((el) => el.id === movie.id);


  if (!isAlreadyFavorite) {
    const updatedFavorites = [...favorite, movie];
    setFavorite(updatedFavorites);
    localStorage.setItem('favorite', JSON.stringify(updatedFavorites));
  } else {
    let res = favorite.filter((el) => el.id !== movie.id);
    setFavorite(res);
    localStorage.setItem('favorite', JSON.stringify(res));
  }
}

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <>
      <div
        id="details"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w440_and_h660_face/${
            movieDetails.backdrop_path
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mvd">
          <img
            src={`https://image.tmdb.org/t/p/w440_and_h660_face/${movieDetails.poster_path}`}
            alt=""
          />
          <div>
            <h1>{movieDetails.title}</h1>
            <h2>{movieDetails.release_date}</h2>
            <h2>{movieDetails.genres?.map((el) => el.name)}</h2>
            <h3>{movieDetails.runtime}</h3>
            <h4>{movieDetails.tagline}</h4>
          </div>
          <a href="" onClick={() => addToFavorite(movieDetails)}>
            <MdOutlineFavorite />

          </a>
        </div>
      </div>
      <div className="actors">
        <Actors actorId={movieId}/>
      </div>
      <div>
        <Videos videoId={movieId} />
      </div>
    </>
  );
};

export default MovieDetails;
