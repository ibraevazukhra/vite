import './Catalog.css'
import Card from '../../components/Card/Card'
import {catalog} from '../../data.js'


export default function CatalogPage(){
    return(
        <div className="catalog">
            <div className="container">
                <div className="catalog-content">
                    <div className="nav-catalog">
                        <p className="nav-cat">Главная \ Каталог</p>
                    </div>
                    <div className="categories">
                        <a href="" className="categor-btn-active">Всё</a>
                        <a href="" className="categor-btn">Топ</a>
                        <a href="" className="categor-btn">Низ</a>
                        <a href="" className="categor-btn">Обувь</a>
                    </div>
                    <div className="catalog-catalog">
                        {catalog.map((card,index) =>{
                            return(
                                <Card key={index} {...card} />
                            )
                        })}
                        {/* <Card name="Рубашка 1" price="7000 р" />
                        <Card name="Рубашка 2" price="8000 р" />
                        <Card name="Рубашка 3" price="9000 р" />
                        <Card name="Рубашка 4" price="10000 р" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}