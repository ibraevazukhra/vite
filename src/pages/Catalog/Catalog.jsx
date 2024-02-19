import './Catalog.css'
import Card from '../../components/Card/Card'
import {catalog} from '../../data.js'
import { useState } from 'react'


export default function CatalogPage(){

    const[query,setQuery] = useState("")

    function search (e){
        setQuery(e.target.value)
    }

    const filterProduct = catalog.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))

    return(
        <div className="catalog">
            <div className="container">
                <div className="catalog-content">
                    <div className="nav-catalog">
                        <p className="nav-cat">Главная \ Каталог</p>
                    </div>
                    <input type="search" className='search-input' onChange={search} name="search" placeholder='Поиск'/>
                    <div className="categories">
                        <a href="" className="categor-btn-active">Всё</a>
                        <a href="" className="categor-btn">Топ</a>
                        <a href="" className="categor-btn">Низ</a>
                        <a href="" className="categor-btn">Обувь</a>
                    </div>
                    <div className="catalog-catalog">
                        {
                            filterProduct.length ?
                            filterProduct.map((card,index) =>{
                                return(
                                    <Card key={index} {...card} />
                                )
                            })
                            :
                            <h2>По запросу "{query}" ничего не найдено</h2>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}