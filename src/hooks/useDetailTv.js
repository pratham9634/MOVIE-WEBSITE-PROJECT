import apiClient from "@/services/api-client";
import { useState, useEffect } from "react";

const useTvDetail = ({id}) => {
    const [TvDetail, setTvDetail] = useState();
    
    const fetchData = async () => {
        try {
            const res = await apiClient.get(`/tv/${id}`);
            setTvDetail(res.data);
        } catch (error) {
            console.error("Error fetching movie details:", error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchData();
        }
    }, [id]);
    
    return { TvDetail };
};

export default useTvDetail;