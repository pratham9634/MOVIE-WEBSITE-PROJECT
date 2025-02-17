import React, { useContext } from 'react';
import { SearchContext } from '@/contexts/SearchContext';
import useSearchDetail from '@/hooks/useSearchDetail';
import MovieCard from '../Cards/MovieCard';
import TvShowCard from '../Cards/TvShowCard';

const SearchList = () => {
    const {searchInput, searchData} = useContext(SearchContext);
    useSearchDetail(searchInput);
    return (
        <div className="bg-gradient-to-br from-black via-[#030202] to-[#2b3131] p-1">
          <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-5">
            {searchData?.map((data) => (
              <div key={data.id}>
                {data.media_type === 'movie' ? (
                  <MovieCard MovieData={data} />
                ) : (
                  <TvShowCard TvShowData={data} />
                )}
              </div>
            ))}
          </div>
        </div>
      );
}

export default SearchList;
