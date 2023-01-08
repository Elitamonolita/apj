import React, {Component} from "react";
import "../../services/services";
import Product from "../product";



export default class ProductListDetails extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        const {swapiService} = this.props;
        swapiService.getBlock().then((data) => {
            this.setState({
                data
            });
        })
    }

    render() {
        const {data} = this.state;
        const content = data ? <Product products={data}></Product> : null;
        return (
            <div>
                {content}
            </div>
        )
    }
}