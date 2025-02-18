import React from 'react'
import { GenresProvider } from './contexts/GenreContext'
import Navbar from './components/Navbar'
import AllRoutes from './components/AllRoutes'
import Footer from './components/Footer'
import { SearchProvider } from './contexts/SearchContext'

const App = () => {
  return (
    <>
    <SearchProvider>
    <GenresProvider>
    <div className="flex flex-col w-auto overflow-hidden">
    <Navbar/>
    <AllRoutes/> 
    <Footer/>
    </div>
    </GenresProvider>
    </SearchProvider>
    
    </>
      
  )
}

export default App
