import { Link } from 'react-router-dom';
import { useFavorites } from '../context.jsx';
export default function MovieCard({movie}) {
 const {toggleFavorite,isFavorite}=useFavorites();
 return <article className="movie-card"><Link to={`/filme/${movie.id}`} className="poster-link"><img className="poster" src={movie.poster} alt={`Poster de ${movie.title}`} loading="lazy" onError={e=>{e.currentTarget.src='https://placehold.co/400x600/171a24/eeeeee?text=CineScope'}}/><span className="rating">★ {Number(movie.rating).toFixed(1)}</span></Link><button className={`fav-button ${isFavorite(movie.id)?'active':''}`} onClick={()=>toggleFavorite(movie)} aria-label={isFavorite(movie.id)?'Remover dos favoritos':'Adicionar aos favoritos'}>{isFavorite(movie.id)?'♥':'♡'}</button><div className="movie-meta"><h3>{movie.title}</h3><p>{movie.year} · {movie.genre}</p></div></article>
}
