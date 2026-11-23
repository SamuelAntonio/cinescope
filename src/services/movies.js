const demoMovies = [
 {id:101,title:'Interestelar',year:2014,genre:'Ficção científica',rating:8.7,description:'Uma equipe atravessa os limites do espaço e do tempo em busca de um futuro para a humanidade.',poster:'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',backdrop:'https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIwGRw6x8m8m1m.jpg'},
 {id:102,title:'O Poderoso Chefão',year:1972,genre:'Drama',rating:9.2,description:'A saga de uma família envolvida no universo do crime organizado e nas escolhas que moldam seu legado.',poster:'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',backdrop:'https://image.tmdb.org/t/p/w1280/tmU7GeKVybMWFButWEGl2M4GeiP.jpg'},
 {id:103,title:'Duna',year:2021,genre:'Ficção científica',rating:8.0,description:'Um jovem herdeiro enfrenta destino, política e sobrevivência em um planeta desértico.',poster:'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',backdrop:'https://image.tmdb.org/t/p/w1280/jYEW5xZkZk2WTrF1P9e1K3e8b7.jpg'},
 {id:104,title:'Parasita',year:2019,genre:'Suspense',rating:8.5,description:'Duas famílias de mundos diferentes se cruzam em uma trama de tensão e reviravoltas.',poster:'https://image.tmdb.org/t/p/w500/7h5WAP9oX6cW0K8J5X0Q6X0J0J0.jpg',backdrop:''},
 {id:105,title:'Homem-Aranha: No Aranhaverso',year:2018,genre:'Animação',rating:8.4,description:'Uma aventura animada que reúne diferentes versões do herói em uma jornada multiversal.',poster:'https://image.tmdb.org/t/p/w500/4q2NNj4eL2Q5v7f9J0aX4K4Y.jpg',backdrop:''},
 {id:106,title:'Whiplash',year:2014,genre:'Drama',rating:8.5,description:'Um jovem baterista busca excelência sob a pressão de um professor implacável.',poster:'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCe0h9h.jpg',backdrop:''},
 {id:107,title:'A Origem',year:2010,genre:'Ficção científica',rating:8.8,description:'Especialistas em sonhos tentam realizar uma missão que desafia a percepção da realidade.',poster:'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',backdrop:''},
 {id:108,title:'Mad Max: Estrada da Fúria',year:2015,genre:'Ação',rating:8.1,description:'Uma fuga frenética por um deserto pós-apocalíptico.',poster:'https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg',backdrop:''}
];
const key = import.meta.env.VITE_TMDB_API_KEY;
export async function getMovies() {
 if (!key) return demoMovies;
 try {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=1`);
  if (!res.ok) throw new Error('Falha na API');
  const data = await res.json();
  return data.results.map(m => ({id:m.id,title:m.title,year:m.release_date?.slice(0,4)||'—',genre:'Filme',rating:m.vote_average,description:m.overview||'Sinopse não disponível.',poster:m.poster_path?`https://image.tmdb.org/t/p/w500${m.poster_path}`:'',backdrop:m.backdrop_path?`https://image.tmdb.org/t/p/w1280${m.backdrop_path}`:''}));
 } catch { return demoMovies; }
}
export async function getMovieById(id) { const movies = await getMovies(); return movies.find(m=>String(m.id)===String(id)) || demoMovies.find(m=>String(m.id)===String(id)); }
