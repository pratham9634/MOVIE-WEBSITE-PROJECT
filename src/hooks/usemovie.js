import apiClient from "@/services/api-client";
import { useState, useEffect } from "react";

const useMovieList = (genres) => {
    const [movieList, setMovieList] = useState([]);
    
    const fetchData = async () => {
        try {
            const response = await apiClient.get("/discover/movie", {
                params: {
                    with_genres: genres,
                },
            });
            setMovieList(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [genres]);
    
    return { movieList }; // Return as object to match component usage
};

export default useMovieList;