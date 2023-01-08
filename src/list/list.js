import React from "react";
import "./list.css"
import BlockList from "./block-list/block-list";

const List = (props) => {
    const {productData} = props;
    const elements = productData.map((item) => {
        return (
        <BlockList {...item}/>
        )
    })
    return (
        <div className="list">
                {elements}
        </div>
    )
}
export default List;