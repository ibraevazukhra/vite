import './Catalog.css'
import ProductImage from '/public/Catalog/product.png'
import AddCardImage from '/public/Catalog/addcard.png'

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
                        <div className="catalog-product">
                            <img src={ProductImage} />
                            <p className="name">Рубашка СВЭГ</p><br />
                            <div className="priceandbtn">
                                <p className="name">9999 руб.</p>
                                <img className="card-img" src={AddCardImage}/>
                            </div>
                        </div>
                        <div className="catalog-product">
                            <img src={ProductImage} />
                            <p className="name">Рубашка СВЭГ</p><br />
                            <div className="priceandbtn">
                                <p className="name">9999 руб.</p>
                                <img className="card-img" src={AddCardImage}/>
                            </div>
                        </div>
                        <div className="catalog-product">
                            <img src={ProductImage} />
                            <p className="name">Рубашка СВЭГ</p><br />
                            <div className="priceandbtn">
                                <p className="name">9999 руб.</p>
                                <img className="card-img" src={AddCardImage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}