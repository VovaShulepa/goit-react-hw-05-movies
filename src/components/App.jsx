import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from './components/SharedLayout/SharedLayout';

const Home = lazy(() => import('./pages/Home.jsx'));
const Movies = lazy(() => import('./pages/Movies.jsx'));
const Cast = lazy(() => import('./pages/Cast.jsx'));
const Reviews = lazy(() => import('./pages/Reviews.jsx'));
const MovieDetails = lazy(() => import('./pages/MovieDetails.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
