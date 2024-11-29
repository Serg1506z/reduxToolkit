import { useDispatch, useSelector } from "react-redux"
import style from "./Favorites.module.css"
import { Card } from "../../Components/Card/Card"
import { setFavorites } from "../../Redux/Slice/Films"
export default function Favorites(){

    const favorites = useSelector(state => state.film.favorites)
    const dispatch = useDispatch()

    return <div className={style.container}>
      {favorites.map((item, index) => <Card item={item} key={index} addFavorite={() => dispatch(setFavorites(favorites.filter(elem => elem.imdbID !== item.imdbID)))} />)}
    </div>
}