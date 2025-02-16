import apiClient from "@/services/api-client";
import { useState, useEffect } from "react";

const useTrendingMovieList = () => {
    const [trendingList, setTrendingList] = useState([]);
    
    const fetchData = async () => {
        try {
            const res = await apiClient.get("/trending/movie/day");
            setTrendingList(res.data.results);
            console.log(res.data.results);
        } catch (error) {
            console.error("Error fetching movie list:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    return { trendingList };
};

export default useTrendingMovieList;