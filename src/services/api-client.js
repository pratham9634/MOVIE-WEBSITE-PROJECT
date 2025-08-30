import axios from "axios";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjA2NWZjZjQxMjQwN2Y1YzE2NGJlNTNkOGIzNGNkNCIsIm5iZiI6MTczOTAyMjEyOC45NzksInN1YiI6IjY3YTc1ZjMwMzEwMDFiZWMxM2M4YjQyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JtSIQscXNXiWCEGqOS3kMdHDD7CsdGuedKgc9UPJI6E`,
  },
    params: {
        api_key: import.meta.env.APP_API_KEY,
    }
});