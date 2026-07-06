import React from 'react'
import Header from './components/layout/header/Header'
import { Route, Routes } from 'react-router-dom'
import Popular from './components/pages/popular/Popular'
import TopRated from './components/pages/topRate/TopRated'
import Fav from './components/pages/fav/Fav'
import MovieDetails from './components/pages/movieDetails/MovieDetails'
import Home from './components/pages/home/Home'
import Search from './components/pages/search/Search'
import Footer from './components/layout/footer/Footer'

const App = () => {
  return (
    <div id="app">
      <div>
        <div className="app">
          <Header/>
          <Routes>
            <Route path='/popular' element={<Popular/>}/>
            <Route path='/topRated' element={<TopRated/>}/>
            <Route path='/favorite' element={<Fav/>}/>
            <Route path='/moveDetails/:movieId' element={<MovieDetails/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/search/:kinoName' element={<Search/>  }/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
