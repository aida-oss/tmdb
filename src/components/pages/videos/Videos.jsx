import React, { useEffect, useState } from "react";
import "./Videos.css";
import axios from "axios";
import { api_key } from "../../../API";

const Videos = ({ videoId }) => {
  const [video, setVideo] = useState([]);

  async function getVideos(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=${key}&language=en-US`
    );
    setVideo(res.data.results);
  }

  useEffect(() => {
    getVideos(api_key);
  }, [videoId]); // Хорошая практика — добавлять id зависимости

  // Если видео нет, чтобы не рендерить пустой блок
  if (!video || video.length === 0) return null;

  return (
    <div className="videos-section">
      <h2>Трейлер</h2>
      <div className="video-wrapper">
        {video.slice(0, 1).map((el) => ( // Обычно берут самое первое видео (индекс 0)
          <iframe
            key={el.id}
            src={`https://www.youtube.com/embed/${el.key}`}
            title={el.name} /* Теперь имя видео динамическое */
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default Videos;