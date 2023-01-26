import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/Api';

import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    getMovieReviews(movieId).then(data => setMovieReviews(data));
  }, [movieId]);
  return (
    <>
      <p className={css.title}>Reviews</p>
      <ul className={css.list}>
        {movieReviews.length !== 0 ? (
          movieReviews.map(review => (
            <li key={review.id}>
              <p className={css.author}>
                <span className={css.label}>Author: </span>
                {review.author}
              </p>
              <p> {review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews</p>
        )}
      </ul>
    </>
  );
};

export default Reviews;
