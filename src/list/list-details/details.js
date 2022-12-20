import React from "react";
import ListDetails from "./list-details";

const Details = (props) => {
    return (
        <div>
            <ListDetails swapiService={props.swapiService}/>
        </div>
    )
}
export default Details