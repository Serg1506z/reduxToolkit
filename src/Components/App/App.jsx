import style from "./App.module.css"
import { Routes, Route } from "react-router-dom"
import Favorites from "../../Pages/Favorites/Favorites"
import FilmPage from "../../Pages/FilmPage/FilmPage"
import MainPage from "../../Pages/MainPage/MainPage"

function App() {

  return <div className={style.App}>
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/:id" element={<FilmPage />}/>
      <Route path="/favorites" element={<Favorites />}/>
    </Routes>
  </div>
}

export default App
