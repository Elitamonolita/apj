import React, {Component} from "react";
import ShowFullProduct from "../show-full-product";

export default class ShowFullDetails extends Component {
    state = {
        data: ''
    };

    componentDidMount() {
        const {swapiService, id} = this.props;
        swapiService.getInfoById(id).then((data) => {
            this.setState({
                data
            });
        })
    }

    render() {
        const {data} = this.state;
        console.log(data)
        const content = data ? <ShowFullProduct fullInfo={data}></ShowFullProduct> : null;
        return (
            <div>
                {content}
            </div>
        )
    }
}