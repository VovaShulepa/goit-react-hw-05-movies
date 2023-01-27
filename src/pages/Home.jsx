import { getTrendingMovies } from 'service/Api';
import { useEffect, useState } from 'react';
import { MovieList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    getTrendingMovies().then(({ results }) => {
      setMovies(results);
    });
  }, []);
  if (!movies) return;

  return <MovieList movies={movies} />;
};

export default Home;
