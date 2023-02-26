import React from "react";
import "./show-full-product.css"
import {useParams} from "react-router-dom";

const ShowFullProduct = (props) => {
    const { id } = useParams();
    const {fullInfo} = props;
    const {name, descriptionFull} = fullInfo[0];

    return (
        <div className="ShowFullProduct-background">
            <div className="product-image-full"></div>
            <div className="product-full-info">
                <h1 className="text">{name}</h1>
                <div className="description-item-full">{descriptionFull}</div>
            </div>
        </div>
    )
}
export default ShowFullProduct