import React from 'react'
import Trendingmovies from './Cards/trendingmovies'
import Trendingtvshows from './Cards/Trendingtvshows'

const Featured = () => {
  return (
    <div className='bg-black'>
        <Trendingmovies/>
        <Trendingtvshows/>
      
    </div>
  )
}

export default Featured
