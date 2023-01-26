import { Link, useLocation } from 'react-router-dom';

const imgPlaceholder =
  'https://holstovich.art/content/images/1/1000x1000l80br20/kartina-russkiy-voennyy-korabl-idi-nakhy-50804578290634.webp';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : imgPlaceholder
              }
              alt={title}
            />
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
