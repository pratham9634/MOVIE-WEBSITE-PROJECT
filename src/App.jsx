import React from 'react'
import Navbar from './components/Navbar'
import AllRoutes from './components/Allroutes'
import { GenresProvider } from './contexts/generescontext'
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
