import React, { useState, useEffect } from "react";
import { MovieContext } from ".";

const RootContext = ({ children }) => {
  const [language, setLanguage] = useState("en-US");
  const [favorite, setFavorite] = useState([]);
  
  // 💡 Объявляем именно theme и ставим по умолчанию 'light'
  const [theme, setTheme] = useState("light"); 

  // Функция переключения
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  function getFavorite() {
    let res = JSON.parse(localStorage.getItem("favorite")) || [];
    setFavorite(res);
  }

  useEffect(() => {
    getFavorite();
  }, []);

  // Меняем класс у body при смене темы
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <MovieContext.Provider value={{ language, setLanguage, favorite, setFavorite, theme, toggleTheme }}>
      {children}
    </MovieContext.Provider>
  );
};

export default RootContext;