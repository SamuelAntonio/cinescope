import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';
import MovieDetails from './pages/MovieDetails.jsx';
import { FavoritesProvider } from './context.jsx';

export default function App() {
  return <FavoritesProvider><div className="app-shell"><Header/><main className="main-content">
    <Routes><Route path="/" element={<Home/>}/><Route path="/favoritos" element={<Favorites/>}/><Route path="/filme/:id" element={<MovieDetails/>}/><Route path="*" element={<Home/>}/></Routes>
  </main><footer className="footer">CineScope <span>• Projeto de portfólio</span></footer></div></FavoritesProvider>;
}
