import React, { useContext, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GenresContext } from "../../contexts/generescontext"
import { useNavigate } from 'react-router-dom';

const genreslist = {
    "genres": [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Music"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 10770,
        "name": "TV Movie"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "War"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ]
  };

const Genere = () => {
  const {setgenres} = useContext(GenresContext);
  const [selectedGenre, setSelectedGenre] = useState();

  const navigate = useNavigate();
  return (
    <div className=" w-44 ">
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <div className="bg-black hover:bg-gray-900 py-2 px-4 text-center rounded-full">{genreslist.genres.find(genre => genre.id === selectedGenre)?.name||"Genere"}</div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44 items-center justify-center bg-gray-700">
          <DropdownMenuRadioGroup value={selectedGenre} onValueChange={(genre) => {
            setSelectedGenre(genre);
            setgenres(genre);
            navigate("/movies");
          }}>
            {genreslist.genres.map((genre) => (
              <DropdownMenuRadioItem key={genre.id} value={genre.id} className="text-gray-200 py-2 px-6 ">{genre.name}</DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Genere
