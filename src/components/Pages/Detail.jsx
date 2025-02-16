import { useParams } from "react-router-dom";
import Detailcard from "../Cards/Detailcard";
import useMovieDetail from "@/hooks/usedetail";

const Detail = () => {
    const { id } = useParams();
    const { movieDetail } = useMovieDetail({id}); // Fixed variable name to match hook
    
    if (!movieDetail) return null; // Add loading check
    
    return (
        <div className="h-auto bg-gradient-to-br from-black via-[#030202] via-[#050404] via-[#080706] via-[#0a0908] via-[#0f0f0d] via-[#131311] via-[#161715] via-[#1b1d1b] via-[#202422] via-[#252a29] to-[#2b3131] p-1">
            <h1 className="text-3xl m-5 font-extrabold text-white">
                Download {movieDetail.title} {movieDetail.release_date && `(${new Date(movieDetail.release_date).getFullYear()})`} Dual Audio Hindi – English BluRay | 480p | 720p | 1080p
            </h1>
            <Detailcard data={movieDetail}/>
        </div>
    );
};

export default Detail;
