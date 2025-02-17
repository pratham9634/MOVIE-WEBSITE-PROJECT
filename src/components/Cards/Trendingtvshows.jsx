
import React from 'react'
import Slider from './slider';
import useTrendingTVList from '@/hooks/useTrendingTvList';

const TrendingTvShows = () => {
  const { trendingList } = useTrendingTVList();
    return (
      <div className="p-4 rounded-3xl text-4xl border-yellow-600 border-6 bg-cover bg-center" style={{ backgroundImage: "url('/src/images/cardbg.jpg')" }}>
      <h1 className="font-serif font-bold text-amber-600 text-shadow-lg"> Trending TV Shows... </h1>
      <Slider data={trendingList}/>
      </div>
    );
}

export default TrendingTvShows
