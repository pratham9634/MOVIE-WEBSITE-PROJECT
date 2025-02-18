import React from 'react'
import { Button } from '../ui/button'
import Featured from '../Featured'

const Home = () => {
  return (
    <div>
      <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat shadow-[20px_20px_20px_rgba(0,0,0,0.9)] bg-black/50"
      style={{
        backgroundImage: "url('https://wallpapersbq.com/images/tokyo-ghoul/tokyo-ghoul-wallpaper-9.webp')",
      }}
    >
      <div className="flex h-screen flex-col items-center justify-center px-6 md:px-12 lg:px-24 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans text-yellow-600 bg-gradient-to-r from-slate-50 via-slate-200 to-white bg-clip-text text-transparent drop-shadow-2xl mb-6">
          Welcome Sir
        </h1>
        <div className="flex flex-col gap-4 max-w-2xl">
          <p className="text-lg md:text-2xl lg:text-3xl text-amber-300 font-semibold leading-relaxed tracking-wide backdrop-blur-sm bg-black/10 p-4 md:p-6 rounded-lg">
            We provide you with a wide range of entertainment....<br />
            Unlimited movies, TV shows, and more.....
          </p>
          <Button className="bg-red-500 hover:bg-red-600 text-white text-lg md:text-xl font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg w-fit transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Know More
          </Button>
        </div>
      </div>
    </div>
      <Featured/>
    </div>
  )
}

export default Home
