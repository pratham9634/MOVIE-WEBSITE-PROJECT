import axios from "axios";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "62ec0f61c4faadb764c1a3c5e007a02c",
    }
});