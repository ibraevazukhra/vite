import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
import CatalogPage from './pages/Catalog/Catalog'
import CardPage from './pages/CardPage/CardPage'
import {Routes,Route} from 'react-router-dom'

function App() {

  return(
    <>
      <Header/>
      <Routes>
        <Route path="/" element = {<Banner />} />
        <Route path="/catalog" element = {<CatalogPage />} />
        <Route path="/catalog/:id" element = {<CardPage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
