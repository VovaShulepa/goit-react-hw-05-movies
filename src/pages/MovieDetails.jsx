import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieById } from 'service/Api';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId).then(data => setMovie(data));
  }, [movieId]);

  if (!movie) return;

  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <Link to={backLinkHref} className={css.link}>
        Go Back
      </Link>
      <div className={css.movie}>
        <img
          className={css.poster}
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt=""
        />
        <div className={css.movieInfo}>
          <div className={css.mainInfo}>
            <h2>
              {movie.title} ({new Date(movie.release_date).getFullYear()})
            </h2>
            <p>User Score: {Math.round(movie.vote_average * 10)} %</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            {movie.genres && movie.genres.map(genre => genre.name).join(', ')}
          </div>
          <div className={css.extraInfo}>
            <h3>Additional information</h3>
            <ul className={css.list}>
              <li>
                <Link
                  to="cast"
                  state={{ from: backLinkHref }}
                  className={css.btn}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  state={{ from: backLinkHref }}
                  className={css.btn}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
