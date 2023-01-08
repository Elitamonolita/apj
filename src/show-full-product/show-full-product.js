import React from "react";
import "./show-full-product.css"
import {useParams} from "react-router-dom";

const ShowFullProduct = (props) => {
    const { id } = useParams();
    const {fullInfo} = props;
    const {name} = fullInfo[0];

    return (
        <div className="ShowFullProduct-background">
            <div className="product-image"></div>
            <div className="product-full-info">
                <h1 className="text">{name}</h1>
            </div>
        </div>
    )
}
export default ShowFullProduct