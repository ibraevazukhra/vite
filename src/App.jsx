import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
import CatalogPage from './pages/Catalog/Catalog'
import {Routes,Route} from 'react-router-dom'

function App() {

  return(
    <>
      <Header/>
      <Routes>
        <Route path="/" element = {<Banner />} />
        <Route path="/catalog" element = {<CatalogPage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
