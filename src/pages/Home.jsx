import { useEffect,useMemo,useState } from 'react';
import { getMovies } from '../services/movies.js';
import MovieGrid from '../components/MovieGrid.jsx';
export default function Home(){
 const [movies,setMovies]=useState([]);const [loading,setLoading]=useState(true);const [search,setSearch]=useState('');const [genre,setGenre]=useState('Todos');
 useEffect(()=>{getMovies().then(setMovies).finally(()=>setLoading(false));},[]);
 const genres=['Todos',...new Set(movies.map(m=>m.genre))];
 const filtered=useMemo(()=>movies.filter(m=>m.title.toLowerCase().includes(search.toLowerCase())&&(genre==='Todos'||m.genre===genre)),[movies,search,genre]);
 return <><section className="hero"><div className="hero-copy"><p className="eyebrow">DESCUBRA SUA PRÓXIMA HISTÓRIA</p><h1>Filmes que ficam<br/><span>com você.</span></h1><p>Explore mundos, encontre favoritos e descubra o que assistir.</p><a href="#catalogo" className="primary-link">Explorar catálogo ↓</a></div><div className="hero-art" aria-hidden="true"><div className="orb orb-one"/><div className="orb orb-two"/><div className="hero-note">CINEMA<br/>IS A JOURNEY</div></div></section>
 <section id="catalogo" className="catalog"><div className="section-heading"><div><p className="eyebrow">SELEÇÃO CINESCOPE</p><h2>Catálogo</h2></div><span className="count">{filtered.length} filmes</span></div><div className="filters"><input aria-label="Buscar filmes" placeholder="Buscar filme..." value={search} onChange={e=>setSearch(e.target.value)}/><select value={genre} onChange={e=>setGenre(e.target.value)} aria-label="Filtrar gênero">{genres.map(g=><option key={g}>{g}</option>)}</select></div>{loading?<p className="empty">Carregando catálogo...</p>:filtered.length?<MovieGrid movies={filtered}/>:<p className="empty">Nenhum filme encontrado. Tente outra busca.</p>}</section></>;
}
