import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import headerImg from "../../../assets/headerImg.svg";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
import { MovieContext } from "../../context";

const Header = () => {
  const nav = useNavigate();
  const [movieName, setMovieName] = useState("");
  const { setLanguage, theme, toggleTheme } = useContext(MovieContext);
  function getSearchMovie() {
    nav(`/search/${movieName}`);
  }
  return (
    <div>
      <div id="header">
        <div className="container">
          <div className="header">
            <div className="headerNav">
              <Link to="/">
                <img src={headerImg} alt="" width={150} />{" "}
              </Link>
              <Link to="/popular">Популярные</Link>
              <Link to="/topRated">Топ рейтинг</Link>
              <Link to="/favorite">Избранное</Link>
            </div>
            <div className="two">
              <input
                value={movieName}
                type="text"
                placeholder="name"
                onChange={(e) => setMovieName(e.target.value)}
                onKeyDown={(e) => {
                  e.key === "Enter" ? getSearchMovie() : null;
                }}
              />
              <div className="searchIcon">
                <a onClick={() => getSearchMovie}>
                  <FaSearch />
                </a>
              </div>
            </div>
            <div
              className="header-settings"
              style={{ display: "flex", alignItems: "center", gap: "15px" }}
            >
              {/* Кнопка переключения темы */}
              <button onClick={toggleTheme} className="theme-toggle-btn">
  {theme === "light" ? <FaMoon className="theme-icon" /> : <FaSun className="theme-icon" />}
</button>
            </div>
            <select onChange={(e) => setLanguage(e.target.value)}>
              <option value={"en-US"}>en</option>
              <option value={"ru-RU"}>rus</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
