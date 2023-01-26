import { SearchBox } from 'components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'service/Api';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const movieName = searchParams.get('query');

  useEffect(() => {
    if (!movieName) return;
    getSearchMovie(movieName).then(({ results }) => {
      setMovies(results);
    });
  }, [movieName]);

  const handleFormSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };
  return (
    <>
      <SearchBox onSubmit={handleFormSubmit} />
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
