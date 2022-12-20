import React from "react";
import "./list.css"
import BlockList from "./block-list/block-list";
import ReactDOM from "react-dom/client";

const List = (props) => {
    const {productData} = props;
    const elements = productData.map((item) => {
        return (
        <BlockList {...item}/>
        )
    })
    return (
        <div className="list">
            <div className="main-margin">
                {elements}
        </div>
        </div>
    )
}
export default List;