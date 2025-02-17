
import { GenresContext } from "@/contexts/GenreContext";
import useMovieList from "@/hooks/useMovie";
import React, { useContext } from "react";
import MovieCard from "../Cards/MovieCard";


const MovieList = () => {
  const { genres } = useContext(GenresContext);
  const { movieList } = useMovieList(genres);

  return (
    <div className="bg-gradient-to-br from-black via-[#030202] to-[#2b3131] p-1">
      <h1 className="text-7xl m-5 font-extrabold text-amber-500">MOVIES.....</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-5">
        {movieList.map((movie) => (
          <div key={movie.id}>
            <MovieCard MovieData={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
