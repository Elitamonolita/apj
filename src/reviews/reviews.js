import React, {Component} from "react";
import "./reviews.css";
import ReviewsItems from "./reviews-items/reviews-items";


export default class Reviews extends Component {
    state = {
        label: ''
    }
    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.label.length>7)
        this.props.addItem(this.state.label)
    }
    render() {
    const {reviewsData} = this.props;
    const reviews = reviewsData.map((item) => {

        return (

            <ReviewsItems addItem={this.props.addItem} {...item}/>
        )
    })
    return (
        <div>
        <div className="reviews-background">
            <div className="reviews-background2">
                <div className="reviews-items">{reviews}</div>
                <div className="reviews-input-block">
                    <form onSubmit={this.onSubmit}>
                <input onChange={this.onLabelChange} className="add-block"/>
                <button className="add-button"></button>
                </form>
                </div>
        </div>
        </div>
</div>
    )}
}
