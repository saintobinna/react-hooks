import React from "react";
import MovieCard from "./MovieCard";
import CardGroup from "react-bootstrap/CardGroup";

const MovieList = ({ movies }) => {
  return (
    <CardGroup>
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </CardGroup>
  );
};

export default MovieList;
