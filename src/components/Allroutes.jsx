import { Route, Routes } from "react-router"
import Home from "./Pages/Home";
import Movielist from "./Pages/movielist";
import Notfound from "./Pages/Notfound";
import Tvshowlist from "./Pages/tvshowlist";
import Anime from "./Pages/Anime";
import Detail from "./Pages/Detail";
import Detailtv from "./Pages/Detailtv";
import Searchlist from "./Pages/Searchlist";
import Player from "./Player";


const Allroutes = () => {
  return (
    <Routes>
        <Route path="/movies" element={<Movielist/>}/>
        <Route path="/movie/:id" element={<Detail />}/>
        <Route path="/tv/:id" element={<Detailtv />}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/tv-shows" element={<Tvshowlist/>}/>
        <Route path="*" element={<Notfound/>}/>
        <Route path="/anime" element={<Anime/>}/>
        <Route path="/search/:Input" element={<Searchlist/>}/>
        <Route path="/player/:id" element={<Player/>}/>

    </Routes>
  );
};

export default Allroutes;
