import { SearchContext } from '@/contexts/searchcontext';
import useSearchDetail from '@/hooks/usesearchdetail';
import React, { useContext } from 'react';
import Moviecard from '../Cards/Moviecard';
import TvshowCard from '../Cards/Tvshowcard';

const Searchlist = () => {
    const {searchInput, searchdata} = useContext(SearchContext);
    useSearchDetail(searchInput);
    return (
        <div className="bg-gradient-to-br from-black via-[#030202] via-[#050404] via-[#080706] via-[#0a0908] via-[#0f0f0d] via-[#131311] via-[#161715] via-[#1b1d1b] via-[#202422] via-[#252a29] to-[#2b3131]  p-1">
          <div className="flex grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 p-5">
            {searchdata?.map((data) => (
              <div key={data.id}>
                {data.media_type === 'movie' ? (
                  <Moviecard moviedata={data} />
                ) : (
                  <TvshowCard tvshowdata={data} />
                )}
              </div>
            ))}
          </div>
        </div>
      );
}

export default Searchlist;
