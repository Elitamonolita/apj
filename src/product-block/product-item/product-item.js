import React from "react";
import "../../services/services"
import "./product-item.css"
import {Link} from "react-router-dom";

const ProductItem = (props) => {
    const {name, id} = props;

    return (
        <div className="product-blocks">
            {name}
            <Link to={"/full/"+id}>Купить</Link>
        </div>
    )
}
export default ProductItem