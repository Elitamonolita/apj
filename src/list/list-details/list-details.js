import React, {Component} from "react";
import "../../services/services";
import List from "../list";


export default class ListDetails extends Component {
    state = {
        data: []
    }
    componentDidMount() {
          const {swapiService} = this.props;
       swapiService.getProduct().then((data) => {
            this.setState({
                data
            });
        })
    }

    render() {
        const getResource = async (url) => {
            const res = await  fetch(url);
            const body = await res.json();
            return body
        }
        getResource('https://swapi.dev/api/people/1/')
            .then((body) => {
                console.log(body)
            })
        const {data} = this.state;
        const content = data ? <List productData={data}></List> : null;
        return (
            <div>
                {content}
            </div>
        )
    }
}