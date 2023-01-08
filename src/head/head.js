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
                        <Link to="/" className="head-buttons">Главная</Link>
                        <Link to="/reviews" type="button" className="button-reviews head-buttons">Отзывы</Link>
                        <Link to="/login" type="button" className="head-buttons">Log in</Link>
                    </div>
                </div>
                <div className="head-background-2"></div>
            </div>
        )
    }
}
