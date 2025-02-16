import useMovieList from "../../hooks/usemovie.js";
import React, { useContext } from "react";
import Moviecard from "../Cards/Moviecard.jsx";
import { GenresContext } from "@/contexts/generescontext.jsx";

const Movielist = () => {
  const { genres } = useContext(GenresContext);
  const { movieList } = useMovieList(genres);

  return (
    <div className="bg-gradient-to-br from-black via-[#030202] via-[#050404] via-[#080706] via-[#0a0908] via-[#0f0f0d] via-[#131311] via-[#161715] via-[#1b1d1b] via-[#202422] via-[#252a29] to-[#2b3131] p-1">
      <h1 className="text-7xl m-5 font-extrabold text-amber-500">MOVIES.....</h1>
      <div className="flex grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 p-5">
        {movieList.map((movie) => (
          <div key={movie.id} className="flex-1">
            <Moviecard moviedata={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movielist;
