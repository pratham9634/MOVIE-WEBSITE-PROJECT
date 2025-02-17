import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { SearchContext } from "@/contexts/SearchContext";
import Genere from "./Cards/Genere";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const { searchInput, setsearchInput } = useContext(SearchContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  return (
    <div className="bg-black p-5 flex flex-col md:flex-row md:items-center justify-between">
      
      {/* Logo & Menu Button (For Mobile) */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <NavLink to="/">
          <img className="h-16 w-auto" src="/src/images/logo1.png" alt="Logo" />
        </NavLink>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-lg mx-auto mt-4 md:mt-0">
      <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate(`/search/${searchInput}`);
            }}
          >
            <div className="relative">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => {
                  setsearchInput(e.target.value);
                  navigate(e.target.value === "" ? "/" : `/search/${e.target.value}`);
                }}
                className="w-full bg-gray-800 text-white rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-white"
                placeholder="Search movies, TV shows, Anime..."
              />
              <div className="absolute left-3 top-2.5">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </form>
      </div>

      {/* Navigation Links & Sign In */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col items-center w-full mt-5 md:mt-0 md:flex md:flex-row md:w-auto md:space-x-6`}
      >
        <div className="text-gray-300 hover:text-white cursor-pointer text-lg">
          <Genere />
        </div>

        <nav className="flex flex-col md:flex-row text-center md:space-x-6">
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "text-amber-300 border-b-4 border-yellow-500 px-3 py-2 rounded-md text-xl font-medium"
                : "text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="/tv-shows"
            className={({ isActive }) =>
              isActive
                ? "text-amber-300 border-b-4 border-yellow-500 px-3 py-2 rounded-md text-xl font-medium"
                : "text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
            }
          >
            TV Shows
          </NavLink>
          <NavLink
            to="/anime"
            className={({ isActive }) =>
              isActive
                ? "text-amber-300 border-b-4 border-yellow-500 px-3 py-2 rounded-md text-xl font-medium"
                : "text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
            }
          >
            Anime
          </NavLink>
        </nav>

        <Button className="mt-4 md:mt-0 bg-red-600 hover:bg-red-400 rounded-xl text-xl font-extrabold">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
