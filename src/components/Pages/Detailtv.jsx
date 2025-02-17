import { useParams } from "react-router-dom";
import useTvDetail from "@/hooks/useDetailTv";
import TvDetailCard from "../Cards/TvDetailCard";

const DetailTv = () => {
    const { id } = useParams();
    const { TvDetail } = useTvDetail({id}); // Fixed variable name to match hook
    
    if (!TvDetail) return null; // Add loading check
    
    return (
        <div className="h-auto bg-gradient-to-br from-black via-[#030202] to-[#2b3131] p-1">
            <h1 className="text-3xl m-5 font-extrabold text-white">
                Download {TvDetail.name} {TvDetail.first_air_date && `(${new Date(TvDetail.first_air_date).getFullYear()})`} Dual Audio Hindi – English BluRay | 480p | 720p | 1080p
            </h1>
            <TvDetailCard Data={TvDetail}/>
        </div>
    );
};

export default DetailTv;
