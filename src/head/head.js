import "./head.css";
import React, {Component} from "react";
import {Link} from "react-router-dom";



export default class Head extends Component {
    render() {
        return (
            <div>
                <div className="head-background">
                    <Link to="/" className="name">Name</Link>
                    <div className="head">
                        <Link to="/reviews" type="button" className="button-reviews head-buttons">Отзывы</Link>
                        {/*<Link to="/test" type="button" className="button-reviews head-buttons">Test</Link>*/}
                    </div>
                </div>
                <div className="head-background-2"></div>
            </div>
        )
    }
}
