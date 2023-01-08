import React from "react";
import "./block-list.css";
import "../../services/services"


const Blocklist = (props) => {
    const {name, id} = props;
    // const {show}=this.state
    // if (show(window).width() < 900) {
    //     let Classname = "block-list ";
    //     Classname =+ " color"
    // }
    return (
        <div className="block-list">
            {name}
            {id}
        </div>
    )
}
export default Blocklist