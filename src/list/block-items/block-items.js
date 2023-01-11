import React from "react";
import "./block-items.css";
import "../../services/services"


const BlockItems = (props) => {
    const {name, id} = props;
    return (
        <div className="block-list">
            {name}
            {id}
        </div>
    )
}
export default BlockItems