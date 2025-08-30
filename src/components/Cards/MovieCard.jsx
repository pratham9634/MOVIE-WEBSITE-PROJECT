import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useNavigate } from "react-router";

const MovieCard = ({ MovieData }) => {
  if (!MovieData) return null;
  const navigate = useNavigate();
  return (
    <Card className="border border-yellow-200 rounded-2xl bg-gray-800 hover:shadow-lg hover:shadow-amber-300 transition duration-300 w-full h-full">
      <CardContent className="p-3 flex flex-col items-center">
        {/* Poster */}
        <img
          onClick={() => navigate(`/movie/${MovieData.id}`)}
          src={`https://image.tmdb.org/t/p/w500/${MovieData.poster_path}`}
          className="w-full rounded-xl cursor-pointer transition-transform duration-200 hover:scale-105 hover:rounded-2xl"
          alt={MovieData.title || "Movie Poster"}
        />

        {/* Title */}
        <h1 className="text-sm sm:text-base md:text-lg font-semibold mt-3 text-white text-center">
          {MovieData.title} | Dual Audio Hindi – English BluRay |{" "}
          <span className="text-red-300">480p</span> |{" "}
          <span className="text-red-300">720p</span> |{" "}
          <span className="text-red-300">1080p</span>
        </h1>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
