import React, {Component} from "react";
import "../../services/services";
import List from "../list";
import Service from "../../services/services";


export default class ListDetails extends Component {

    state = {
        data: []
    }
    componentDidMount() {
        const swapiService = new Service();
        swapiService.getProduct().then((data) => {
            this.setState({
                data
            });
        })
    }

    render() {
        const {data} = this.state;
        console.log(data)
        const content = data ? <List productData={data}></List> : null;
        console.log(content)
        return (
            <div>
                {content}
            </div>
        )
    }
}