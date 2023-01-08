import React from "react";
import ListDetails from "../list/list-details/list-details";
import ProductListDetails from "../product-block/product-details/product-list-details";

const GeneralMainDetails = (props) => {
    const {swapiService} = props;
    return (

        <div>
            <ListDetails swapiService={swapiService}/>
            <ProductListDetails swapiService={swapiService}/>
        </div>
    )
}
export default GeneralMainDetails