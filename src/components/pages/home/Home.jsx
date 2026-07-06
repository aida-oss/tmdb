import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Home.css";
import { MovieContext } from "../../context";
import MovieCard from "../movieCard/MovieCard"; 

const Home = () => {
  const { language } = useContext(MovieContext);
  const [allBackground, setAllBackground] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); 
  const [trendingMovies, setTrendingMovies] = useState([]); // Стейт для фильмов
  const navigate = useNavigate(); 
  
  async function getHomeData() {
    try {
      let res = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=45d1d56fc54beedb6c0207f9ac6cab7c&language=${language}&page=1`,
      );
      let results = res.data.results;
      
      // 1. Берем рандомный фон для баннера
      let randomBg = Math.floor(Math.random() * results.length);
      setAllBackground(results[randomBg].backdrop_path);
      
      // 2. Сохраняем все фильмы в стейт
      setTrendingMovies(results);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
    }
  };

  useEffect(() => {
    getHomeData(); 
  }, [language]);

  return (
    <div>
      {/* СЕКЦИЯ БАННЕРА */}
      <div id="hero">
        <div
          className="hero"
          style={{
            background: allBackground
              ? `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${allBackground}) no-repeat center/cover`
              : "#0f0f0f",
          }}
        >
          <div className="hero-content">
            <h1>Добро пожаловать.</h1>
            <h4>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h4>

            <form className="hero-search-form" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Найти фильм, сериал, персону..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit">Искать</button>
            </form>
          </div>
        </div>
      </div>

      {/* СЕКЦИЯ С ФИЛЬМАМИ (Пишем прямо тут, без MovieRow) */}
      <div className="home-trending-section" style={{ padding: "40px 20px" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "24px", color: "#000" }}>Что популярно</h2>
        
        <div className="home-movies-list">
          {trendingMovies.map((movie) => (
            // Передаем именно в el={movie}, как прописано в твоем MovieCard!
            <MovieCard key={movie.id} el={movie} /> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;