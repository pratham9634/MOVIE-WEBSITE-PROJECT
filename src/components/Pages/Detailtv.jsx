import { useParams } from "react-router-dom";
import useTvDetail from "@/hooks/usedetailtv";
import Tvdetailcard from "../Cards/Tvdetailcard";

const Detailtv = () => {
    const { id } = useParams();
    const { TvDetail } = useTvDetail({id}); // Fixed variable name to match hook
    
    if (!TvDetail) return null; // Add loading check
    
    return (
        <div className="h-auto bg-gradient-to-br from-black via-[#030202] via-[#050404] via-[#080706] via-[#0a0908] via-[#0f0f0d] via-[#131311] via-[#161715] via-[#1b1d1b] via-[#202422] via-[#252a29] to-[#2b3131] p-1">
            <h1 className="text-3xl m-5 font-extrabold text-white">
                Download {TvDetail.name} {TvDetail.first_air_date && `(${new Date(TvDetail.first_air_date).getFullYear()})`} Dual Audio Hindi – English BluRay | 480p | 720p | 1080p
            </h1>
            <Tvdetailcard data={TvDetail}/>
        </div>
    );
};

export default Detailtv;
