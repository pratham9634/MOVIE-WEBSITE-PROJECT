import { useParams } from "react-router-dom";
import DetailCard from "../Cards/DetailCard";
import useMovieDetail from "@/hooks/useDetail";


const Detail = () => {
    const { id } = useParams();
    const { movieDetail } = useMovieDetail({id}); // Fixed variable name to match hook
    
    if (!movieDetail) return null; // Add loading check
    
    return (
        <div className="h-auto bg-gradient-to-br from-black via-[#030202] to-[#2b3131] p-1">
            <h1 className="text-3xl m-5 font-extrabold text-white">
                Download {movieDetail.title} {movieDetail.release_date && `(${new Date(movieDetail.release_date).getFullYear()})`} Dual Audio Hindi – English BluRay | 480p | 720p | 1080p
            </h1>
            <DetailCard data={movieDetail}/>
        </div>
    );
};

export default Detail;
