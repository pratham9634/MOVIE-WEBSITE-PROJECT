import useTvShowList from '@/hooks/useTvShow';
import React from 'react'
import TvShowCard from '../Cards/TvShowCard';


const TvShowList = () => {
  const { TvShowList } = useTvShowList();

  return (
    <div className="bg-gradient-to-br from-black via-[#030202] to-[#2b3131] p-1">
      <h1 className="text-7xl m-5 font-extrabold text-amber-500">TV SHOWS.....</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 p-5">
        {TvShowList.map((show) => (
          <div key={show.id}>
            <TvShowCard TvShowData={show} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvShowList
