import { Route, Routes } from "react-router"
import MovieList from "./Pages/MovieList";
import Detail from "./Pages/Detail";
import DetailTv from "./Pages/DetailTv";
import Home from "./Pages/Home";
import TvShowList from "./Pages/TvShowList";
import NotFound from "./Pages/NotFound";
import Anime from "./Pages/Anime";
import SearchList from "./Pages/SearchList";
import Player from "./Player";



const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/movies" element={<MovieList/>}/>
        <Route path="/movie/:id" element={<Detail />}/>
        <Route path="/tv/:id" element={<DetailTv />}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/tv-shows" element={<TvShowList/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/anime" element={<Anime/>}/>
        <Route path="/search/:Input" element={<SearchList/>}/>
        <Route path="/player/:id" element={<Player/>}/>

    </Routes>
  );
};

export default AllRoutes;
