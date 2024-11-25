import { useEffect } from "react"
import style from "./FilmPage.module.css"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getFilmByIdThunk } from "../../Redux/Slice/Films/async"

export default function FilmPage(){
    const currentFilm = useSelector(state => state.film.currentFilm)
    const {id} = useParams()
    const dispatch = useDispatch()

    console.log(currentFilm);
    
    useEffect(() => {
        if(id) {
            dispatch(getFilmByIdThunk(id))
        }
    }, [id])

    return <div className={style.film}>
       <h1>{currentFilm?.Title}</h1>
       <img src={currentFilm?.Poster} alt="" />
       <p>Год выпуска {currentFilm?.Year}</p>
       <p>Продолжительность {currentFilm?.Runtime}</p>
       <p>Язык {currentFilm?.Language}</p>
    </div>
}