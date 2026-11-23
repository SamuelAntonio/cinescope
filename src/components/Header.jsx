import { Link, NavLink } from 'react-router-dom';
export default function Header(){return <header className="header"><Link className="brand" to="/"><span className="brand-mark">C</span>CineScope</Link><nav><NavLink to="/" end>Explorar</NavLink><NavLink to="/favoritos">Favoritos</NavLink></nav></header>}
