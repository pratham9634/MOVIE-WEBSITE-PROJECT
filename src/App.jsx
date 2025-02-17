import React from 'react'
import { GenresProvider } from './contexts/GenreContext'
import Navbar from './components/Navbar'
import AllRoutes from './components/AllRoutes'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <GenresProvider>
    <div className="flex flex-col">
    <Navbar/>
    <AllRoutes/> 
    <Footer/>
    </div>
    </GenresProvider>
    </>
      
  )
}

export default App
