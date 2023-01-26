import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Reviews } from 'pages/Reviews';
import { Cast } from 'pages/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="reviewers" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
