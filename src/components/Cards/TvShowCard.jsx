import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useNavigate } from "react-router"; // Corrected import path

const TvShowCard = ({ TvShowData }) => {
  if (!TvShowData ) return null;
  const navigate = useNavigate();
  return (
    <Card className="border-[1.5px] border-yellow-200 rounded-3xl bg-gray-800 w-72 h-[500px] m-4"> 
      <CardContent>
        <img 
         onClick={() => {
          navigate(`/tv/${TvShowData .id}`);
        }}
          src={`https://image.tmdb.org/t/p/w500/${TvShowData .poster_path}`}
          className="h-auto mt-3 rounded-lg m-1 transition-transform duration-200 hover:scale-110 hover:rounded-3xl hover:shadow-lg"
          alt={TvShowData .name || "TV Show Poster"}
        />
        <h1 className="text-lg font-semibold mt-2 text-white">{TvShowData .name} | <span className="text-red-300">All seasons</span> | Dual Audio Hindi – English BluRay | <span className="text-red-300">480p</span> | <span className="text-red-300">720p</span> | <span className="text-red-300">1080p</span></h1>
      </CardContent>
    </Card>
  );
};

export default TvShowCard;
