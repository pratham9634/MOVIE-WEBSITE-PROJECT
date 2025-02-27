import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useNavigate } from "react-router"; // Corrected import path

const TrendingTvCard = ({ tvShowData }) => {
  if (!tvShowData) return null;
  const navigate = useNavigate();
  return (
    <Card className="border-[1px] rounded-3xl bg-gray-800 w-72 h-[485px] m-4"> 
      <CardContent>
        <img 
         onClick={() => {
          navigate(`/tv/${tvShowData.id}`);
        }}
          src={`https://image.tmdb.org/t/p/w500/${tvShowData.poster_path}`}
          className="h-auto mt-3 rounded-lg m-1 transition-transform duration-200 hover:scale-110 hover:rounded-3xl hover:shadow-lg"
          alt={tvShowData.name || "TV Show Poster"}
        />
        </CardContent>
    </Card>
  );
};

export default TrendingTvCard;
