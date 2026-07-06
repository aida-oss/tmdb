import React from 'react'
import './Footer.css'
import footerLogo from '../../../assets/footerLogo.svg'

const Footer = () => {
  return (
    <div id='footer'>
        <div className="container">
            <div className="footer">
                <img src={footerLogo} alt="" />
                <div className="text">
                    <h3>Главное</h3>
                    <a href="">О TMDB</a>
                    <a href="">Документация API</a>
                    <a href="">API для Бизнеса</a>
                    <a href="">Статус системы</a>
                </div>
                <div className="text">
                    <h3>Участвуйте</h3>
                    <a href="">Библия редакторов</a>
                    <a href="">Добавить новый фильм</a>
                    <a href="">Добавить новый сериал</a>
                </div>
                <div className="text">
                    <h3>Сообщество</h3>
                    <a href="">Руководства</a>
                    <a href="">Доска почёта</a>
                    <a href="">Форумы поддержки</a>
                </div>
                <div className="text">
                    <h3>О праве</h3>
                    <a href="">Условия использования</a>
                    <a href="">API Правила использования</a>
                    <a href="">Политика конфиденциальности</a>
                    <a href="">Политика CDMCA</a>
                </div>
            </div>
        </div>
      
    </div>
  )
}
export default Footer
