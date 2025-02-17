import apiClient from "@/services/api-client";
import { useState, useEffect } from "react";

const useTvShowList = () => {
    const [TvShowList, setTvShowList] = useState([]);
    
    const FetchData = async () => {
        try {
            const res = await apiClient.get("/discover/tv");
            setTvShowList(res.data.results);
            console.log(res.data.results);
        } catch (error) {
            console.error("Error fetching TV shows:", error);
        }
    };

    useEffect(() => {
        FetchData();
    }, []);
    
    return { TvShowList };
};

export default useTvShowList;