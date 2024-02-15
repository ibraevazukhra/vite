import Button from '../../components/Button/Button'
import ProductImage from '/public/Catalog/product.png'

export default function Card ({name,price}){
    return(
    <div className="catalog-product">
        <img src={ProductImage} />
        <p className="name">{name}</p><br />
        <div className="priceandbtn">
            <p className="name">{price}</p>
            <Button title="В корзину"/>
        </div>
    </div>
    )
}