import { useFavorites } from '../context.jsx';
import MovieGrid from '../components/MovieGrid.jsx';
export default function Favorites(){const {favorites}=useFavorites();return <section className="catalog page"><div className="section-heading"><div><p className="eyebrow">SUA COLEÇÃO</p><h2>Favoritos</h2></div><span className="count">{favorites.length} filmes</span></div>{favorites.length?<MovieGrid movies={favorites}/>:<div className="empty-state"><h3>Sua lista está esperando.</h3><p>Adicione filmes ao coração para guardá-los aqui.</p></div>}</section>}
