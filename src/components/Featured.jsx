import React from 'react'
import TrendingMovies from './Cards/TrendingMovies'
import TrendingTvShows from './Cards/TrendingTvShows'


const Featured = () => {
  return (
    <div className='bg-black'>
        <TrendingMovies/>
        <TrendingTvShows/>
      
    </div>
  )
}

export default Featured
