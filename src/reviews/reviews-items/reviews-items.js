import React, {Component} from "react";
import "./reviews-items.css";

export default  class ReviewsItems extends  Component {

    render() {
        const {reviews} = this.props;
    return (
        <div className="reviews-blocks">
            <div className="person-name">Гость</div>
            {reviews}
        </div>
    ) }
}