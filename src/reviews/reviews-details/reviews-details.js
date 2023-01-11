import React, {Component} from "react";
import Reviews from "../reviews";

export default class ReviewsDetails extends Component {
    id=1
    state = {
        data: [],
        reviews: []
    }
    addItem = (text) => {


        const newItem = {
            reviews: text,
            id: this.id++
        }
        this.setState(({reviews})=> {
            const ArrayReviews = [
                ...reviews,
                newItem
            ];
            return {
                reviews: ArrayReviews
            }

        })
    };

        render() {
            const {reviews} = this.state;
            const reviews1 = reviews ? <Reviews addItem={this.addItem} reviewsData={reviews}></Reviews> : null;
            return (
             <div>
                 {reviews1}
             </div>
            )
        }
    }