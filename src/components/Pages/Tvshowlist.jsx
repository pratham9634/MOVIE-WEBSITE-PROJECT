import React from 'react'
import useTvShowList from '../../hooks/useTvshow.js'
import Tvshowcard from '../Cards/Tvshowcard.jsx'

const Tvshowlist = () => {
  const { tvshowlist } = useTvShowList();

  return (
    <div className="bg-gradient-to-br from-black via-[#030202] via-[#050404] via-[#080706] via-[#0a0908] via-[#0f0f0d] via-[#131311] via-[#161715] via-[#1b1d1b] via-[#202422] via-[#252a29] to-[#2b3131]  p-1">
      <h1 className="text-7xl m-5 font-extrabold text-amber-500">TV SHOWS.....</h1>
      <div className="flex grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 p-5">
        {tvshowlist.map((show) => (
          <div key={show.id}>
            <Tvshowcard tvshowdata={show} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tvshowlist
