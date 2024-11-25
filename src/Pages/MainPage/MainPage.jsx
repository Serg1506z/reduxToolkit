import { getFilmsThunk } from "../../Redux/Slice/Films/async"
import { useDispatch, useSelector } from "react-redux"
import style from "./MainPage.module.css"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function MainPage(){
    const [value, setValue] = useState('')
    const films = useSelector(state => state.film.films)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(value !== ''){
            dispatch(getFilmsThunk(value))
        }
    },[value])

    return <div  className={style.main}>
        <div className={style.search__container}>
            <input type="text" value={value} onInput={(e) => setValue(e.target.value)} />
        </div>
        <div className={style.container}>
            {films.map(item => {
                return <div className={style.film}>
                    <div className={style.title__container}>
                        <Link to={`/${item.imdbID}`}>{item.Title}</Link>
                        <p>{item.Year}</p>
                    </div>
                    <img src={item.Poster} alt="" />
                </div>
            })}
        </div>
    </div>
}