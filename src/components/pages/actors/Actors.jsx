import axios from "axios";
import React, { useEffect, useState } from "react";
import { api_key } from "../../../API";
import './Actors.css'

const Actors = ({ actorId }) => {
  const [actors, setActors] = useState([]);
  async function getActors(key) {
    let res = await axios(`
            https://api.themoviedb.org/3/movie/${actorId}/credits?api_key=${key}&language=en-US`);
    // console.log(res);
    setActors(res.data.cast);
  }
  useEffect(() => {
    getActors(api_key);
  }, []);
  // Как лучше переписать блок return в компоненте:
return (
  <div id="actors">
    <div className="container">
      {/* Добавим заголовок секции, так как без него пустая лента непонятна */}
      <h2 style={{ marginBottom: '20px', fontSize: '22px' }}>В главных ролях</h2>
      
      <div className="actors">
        {actors?.slice(0, 15).map((el) => ( // .slice(0, 15) ограничит вывод до 15 актеров, чтобы страница не зависала
          <div className="card" key={el.id}> {/* Обязательно добавляйте key */}
            <img
              src={
                el.profile_path 
                  ? `https://image.tmdb.org/t/p/w440_and_h660_face/${el.profile_path}`
                  : "https://via.placeholder.com/440x660?text=No+Image" // Заглушка, если у актера нет фото
              }
              alt={el.name}
            />
            <h2>{el.name}</h2>    
          </div>
        ))}   
      </div>
    </div>
  </div>
);
};

export default Actors;
