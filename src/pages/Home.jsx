import { getTrendingMovies } from 'service/Api';
import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    getTrendingMovies().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  if (!movies) return;

  return <MoviesList movies={movies} />;
};
