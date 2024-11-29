import style from './Card.module.css'
import { Link } from 'react-router-dom'

export function Card({item, addFavorite = () => {}}){
    return <div className={style.film}>
    <button className={style.favorite__btn} onClick={addFavorite}></button>
    <div className={style.title__container}>
        <Link to={`/${item.imdbID}`}>{item.Title}</Link>
        <p>{item.Year}</p>
    </div>
    <img src={item.Poster} alt="" />
</div>
}
