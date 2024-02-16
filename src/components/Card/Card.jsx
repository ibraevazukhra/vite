import Button from '../../components/Button/Button'
import ProductImage from '/public/Catalog/product.png'
import { Link } from 'react-router-dom'

export default function Card ({name,price,id}){
    return(
    <div className="catalog-product">
        <img src={ProductImage} />
        <p className="name">{name}</p><br />
        <div className="priceandbtn">
            <p className="name">{price}</p>
            <Link to={`${id}`}>
                <Button title="В корзину"/>
            </Link>
        </div>
    </div>
    )
}