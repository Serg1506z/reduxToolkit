import { getFilmsThunk } from "../../Redux/Slice/Films/async"
import { useDispatch, useSelector } from "react-redux"
import style from "./MainPage.module.css"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Card } from "../../Components/Card/Card"
import { setFavorites } from "../../Redux/Slice/Films"


export default function MainPage(){
    const [value, setValue] = useState('')
    const films = useSelector(state => state.film.films)
    const favorites = useSelector(state => state.film.favorites)
    const dispatch = useDispatch()
    
    function handleClick (){
        dispatch(getFilmsThunk(value)) 
    }

    return <div  className={style.main}>
        <Link to={`/favorites`}>Избранное</Link>
        <div className={style.search__container}>
            <input type="text" value={value} onInput={(e) => setValue(e.target.value)} />
            <button className={style.search__btn} onClick={handleClick} disabled = {value === ""}>Search</button>
        </div>
        <div className={style.container}>
            {films.map((item, index) => {
                return <Card key={index} item={item} addFavorite={() => !favorites.some(elem => elem.imdbID === item.imdbID ) &&  dispatch(setFavorites([...favorites, item]))}/>
            })}
        </div>
    </div>
}