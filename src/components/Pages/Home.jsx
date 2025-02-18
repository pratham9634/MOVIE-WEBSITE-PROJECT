import React from 'react'
import { Button } from '../ui/button'
import Featured from '../Featured'

const Home = () => {
  return (
    <div>
      <div className="min-h-screen w-auto bg-cover bg-center bg-no-repeat shadow-[20px_20px_20px_rgba(0,0,0,0.9)] bg-black/50" style={{ backgroundImage: "url('https://wallpapersbq.com/images/tokyo-ghoul/tokyo-ghoul-wallpaper-9.webp')" }}>
        <div className="flex h-screen flex-col items-start justify-center pt-8 ml-24">
          <h1 className="text-8xl font-bold font-sans text-left text-yellow-600 bg-gradient-to-r from-slate-50 via-slate-200 to-white bg-clip-text text-transparent drop-shadow-2xl mb-8">
            Welcome Sir
          </h1>
          <div className="flex flex-col gap-2">
            <p className="text-left text-3xl text-amber-300 font-semibold leading-relaxed tracking-wide backdrop-blur-sm bg-black/10 p-6 rounded-lg  ">
              We provide you wide range of entertainment....<br/>
              Unlimited movies, TV shows and more.....
            </p>
            <Button
              className="bg-red-500 hover:bg-red-600 text-white text-xl font-bold py-4 px-8 rounded-lg w-fit transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
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
