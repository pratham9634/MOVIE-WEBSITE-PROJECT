import apiClient from "@/services/api-client";
import { useState, useEffect } from "react";

const useMovieDetail = ({id}) => {
    const [movieDetail, setMovieDetail] = useState();
    
    const fetchData = async () => {
        try {
            const res = await apiClient.get(`/movie/${id}`);
            setMovieDetail(res.data);
        } catch (error) {
            console.error("Error fetching movie details:", error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchData();
        }
    }, [id]);
    
    return { movieDetail };
};

export default useMovieDetail;