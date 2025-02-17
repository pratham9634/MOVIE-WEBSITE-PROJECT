import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useNavigate } from "react-router";

const TrendingMovieCard = ({ movieData }) => {
  if (!movieData) return null;
  const navigate = useNavigate();
  return (
    <Card className="border-[1px] rounded-3xl bg-gray-800 w-72 m-4">
      <CardContent>
        <img 
          onClick={() => {
            navigate(`/movie/${movieData.id}`);
          }}
          src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
          className="h-auto mt-3 rounded-lg m-1 transition-transform duration-200 hover:scale-105 hover:rounded-3xl hover:shadow-lg"
          alt={movieData.title || "Movie Poster"}
        />
        </CardContent>
    </Card>
  );
};

export default TrendingMovieCard;
