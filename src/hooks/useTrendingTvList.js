import apiClient from "@/services/api-client";
import { useState, useEffect } from "react";

const useTrendingTVList = () => {
    const [trendingList, setTrendingList] = useState([]);
    
    const fetchData = async () => {
        try {
            const res = await apiClient.get("/trending/tv/day");
            setTrendingList(res.data.results);
            console.log(res.data.results);
        } catch (error) {
            console.error("Error fetching TV shows:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    return { trendingList };
};

export default useTrendingTVList;