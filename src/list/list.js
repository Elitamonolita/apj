import React from "react";
import "./list.css"
import BlockItems from "./block-items/block-items";

const List = (props) => {
    const {productData} = props;
    const elements = productData.map((item) => {
        return (
        <BlockItems {...item}/>
        )
    })
    return (
        <div className="list">
                {elements}
        </div>
    )
}
export default List;