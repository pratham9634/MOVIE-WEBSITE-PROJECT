import { GenresContext } from "@/contexts/GenreContext";
import useMovieList from "@/hooks/useMovie";
import React, { useContext } from "react";
import MovieCard from "../Cards/MovieCard";

const MovieList = () => {
  const { genres } = useContext(GenresContext);
  const { movieList } = useMovieList(genres);

  return (
    <div className="bg-gradient-to-br from-black via-[#030202] to-[#2b3131] p-3 md:p-5">
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-amber-500 mb-6 text-center">
        MOVIES
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movieList.map((movie) => (
          <div key={movie.id} className="flex justify-center">
            <MovieCard MovieData={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
