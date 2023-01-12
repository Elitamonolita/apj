import React from "react";
import "../../services/services"
import "./product-item.css"
import {Link} from "react-router-dom";

const ProductItem = (props) => {
    const {name, id, description, price} = props;

    return (
        <Link to={"/full/"+id} className="product-blocks">
            <img className="product-image"></img>
            <div className="items-description">
                <div className="name-item">{name}</div>
                <div className="description-item">{description}</div>
            </div>
            <div className="price" >Цена: {price}</div>
        </Link>
    )
}
export default ProductItem