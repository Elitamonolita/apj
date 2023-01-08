import React from "react";
import {useParams} from "react-router-dom";
import ShowFullDetails from "./show-full-details";

const ShowFullDetailWrapper = (props) => {
        const { id } = useParams();
    return (
            <ShowFullDetails id={id} swapiService={props.swapiService}/>
    )
}
export default ShowFullDetailWrapper