import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
import CatalogPage from './pages/Catalog/Catalog'
import CardPage from './pages/CardPage/CardPage'
import UsersPage from './pages/UsersPage/UsersPage'
import {Routes,Route} from 'react-router-dom'

function App() {

  return(
    <>
      <Header/>
      <Routes>
        <Route path="/" element = {<Banner />} />
        <Route path="/catalog" element = {<CatalogPage />} />
        <Route path="/catalog/:id" element = {<CardPage />} />
        <Route path="/users" element = {<UsersPage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
