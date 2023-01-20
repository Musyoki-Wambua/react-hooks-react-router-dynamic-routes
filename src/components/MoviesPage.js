import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match= useRouteMatch ();
  return (
    <div>
      <MoviesList movies={movies} />
      <Route>
        <h3>Choose a movie from the list above</h3>
      </Route>
      <Route exact path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}
export default MoviesPage;
