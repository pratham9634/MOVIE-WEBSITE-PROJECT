import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const DetailCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="h-auto bg-gradient-to-br from-black to-gray-900 p-6 md:p-10">
      <Card className="border border-gray-700 shadow-lg shadow-gray-600 md:h-screen sm:h-screen ">
        {/* Movie Poster and Background */}
        <div className="relative h-[400px] md:h-[520px] bg-cover bg-center ">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            className="absolute top-0 left-0 w-full object-cover md:h-screen sm:h-screen"
            alt="Movie Backdrop"
          />
          <div className="absolute top-0 left-0 w-full h-full sm:h-screen bg-black bg-opacity-50 backdrop-blur-sm"></div>

          {/* Movie Info Section */}
          <div className="relative z-10 flex flex-col md:flex-row  items-center  lg:justify-center">
            {/* Left - Poster */}
            <Card className="border border-gray-600 bg-gray-800 w-48 md:w-72 rounded-xl shadow-lg">
              <CardContent>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                  className="h-auto rounded-lg transition-transform duration-300 hover:scale-110"
                  alt="Movie Poster"
                />
              </CardContent>
            </Card>

            {/* Right - Details */}
            <div className="right flex flex-col w-auto gap-4 p-16 mb-7 text-white font-semibold text-3xl sm:text-lg">
            <h1 className="text-amber-400 font-extrabold text-2xl">MOVIE INFO</h1>
              <p><span className="font-bold">Title:</span> {data.title}</p>
              <p><span className="font-bold">Language:</span> Hindi DD5.1 + English</p>
              <p><span className="font-bold">Subtitle:</span> YES (English)</p>
              <p><span className="font-bold">Release Year:</span> {new Date(data.release_date).getFullYear()}</p>
              <p>Size: 450MB || 1.2GB || 2GB</p>
              <p><span className="font-bold">Quality:</span> 480p | 720p | 1080p | 4K</p>
              
              <Button 
                className="bg-red-600 px-6 py-3 text-lg font-bold hover:bg-orange-500 rounded-lg"
                onClick={() => navigate(`/player/${data.id}`)}
              >
                🎬 Watch Online
              </Button>

            </div>
          </div>
        </div>
      </Card>

      {/* Movie Description */}
      <div className="text-white text-center font-serif text-lg md:text-xl p-6">
        <p>
          Download <span className="text-amber-300">{data.title} {new Date(data.release_date).getFullYear()}</span> 
          in 480p, 720p, and 1080p BluRay quality with original Hindi & English audio.
        </p>
        <p className="mt-4">
          Enjoy hassle-free downloads with Google Drive links. Watch your favorite movies & series online, anytime!
        </p>
      </div>

      {/* Movie Synopsis */}
      <div className="text-white text-center p-6">
        <h2 className="text-3xl font-bold text-amber-400">Movie Synopsis</h2>
        <p className="text-lg mt-3">{data.overview}</p>
        <p className="text-lg mt-3">{data.overview}</p>
      </div>

      {/* Screenshots */}
      <div className="text-white text-center p-6">
        <h2 className="text-3xl font-bold text-amber-400">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <img src="/src/images/soon.jpg" alt="Coming Soon" className="rounded-xl" />
          <img src="/src/images/soon.jpg" alt="Coming Soon" className="rounded-xl" />
          <img src="/src/images/soon.jpg" alt="Coming Soon" className="rounded-xl" />
        </div>
      </div>

      {/* Download Links */}
      <div className="text-center text-white p-6">
        <h2 className="text-4xl font-bold text-amber-500">🔥 Download Links</h2>
        <div className="flex flex-col items-center space-y-4 mt-6">
          <div>
            <p className="text-lg">
              {data.title} {new Date(data.release_date).getFullYear()} - 480p [300MB]
            </p>
            <Button className="bg-orange-600 px-6 py-3 text-lg font-bold hover:bg-orange-500 rounded-lg">
              Download 480p
            </Button>
          </div>
          <div>
            <p className="text-lg">
              {data.title} {new Date(data.release_date).getFullYear()} - 720p [1GB]
            </p>
            <Button className="bg-orange-600 px-6 py-3 text-lg font-bold hover:bg-orange-500 rounded-lg">
              Download 720p
            </Button>
          </div>
          <div>
            <p className="text-lg">
              {data.title} {new Date(data.release_date).getFullYear()} - 1080p [2GB]
            </p>
            <Button className="bg-orange-600 px-6 py-3 text-lg font-bold hover:bg-orange-500 rounded-lg">
              Download 1080p
            </Button>
          </div>
        </div>
      </div>

      {/* Thank You Message */}
      <h1 className="text-center text-amber-400 text-3xl md:text-5xl font-bold pb-6">
        -- THANK YOU FOR CHOOSING US --
      </h1>
    </div>
  );
};

export default DetailCard;
