import React from "react";
import "./block-list.css";


const Blocklist = (props) => {
    const {name, id} = props;
    return (
        <div className="block-list">
            {name}
            {id}
    </div>
    )
}
export default Blocklist