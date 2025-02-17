import { SearchContext } from "@/contexts/SearchContext";
import apiClient from "@/services/api-client";
import { useEffect, useContext } from "react";

const useSearchDetail = (Input) => {
    const { setsearchdata } = useContext(SearchContext);

    const fetchData = async () => {
        console.log("Fetching search data for input:", Input);
        try {
            const res = await apiClient.get("/search/multi", {
                params: {
                    query: Input,
                },
            });
            console.log("Search data fetched successfully:", res.data.results);
            setsearchdata(res.data.results);
        } catch (error) {
            console.error("Error fetching search data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [Input]);
};

export default useSearchDetail