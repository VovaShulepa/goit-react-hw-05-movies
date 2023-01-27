import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <nav className={css.nav}>
        <Link to="/" className={css.link}>
          Home
        </Link>
        <Link to="movies" className={css.link}>
          Movies
        </Link>
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
