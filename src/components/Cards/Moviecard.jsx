import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useNavigate } from "react-router";

const Moviecard = ({ moviedata }) => {
  if (!moviedata) return null;
  const navigate = useNavigate();
  return (
    <Card className="border-[1px] rounded-3xl bg-gray-800 w-72 m-4">
      <CardContent>
        <img 
          onClick={() => {
            navigate(`/movie/${moviedata.id}`);
          }}
          src={`https://image.tmdb.org/t/p/w500/${moviedata.poster_path}`}
          className="h-auto mt-3 rounded-lg m-1 transition-transform duration-200 hover:scale-105 hover:rounded-3xl hover:shadow-lg"
          alt={moviedata.title || "Movie Poster"}
        />
        <h1 className="text-lg font-semibold mt-2 text-white">{moviedata.title} |Dual Audio Hindi – English BluRay | <span className="text-red-300">480p</span> | <span className="text-red-300">720p</span>| <span className="text-red-300">1080p</span></h1>
      </CardContent>
    </Card>
  );
};

export default Moviecard;
