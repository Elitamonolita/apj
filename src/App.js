import './App.css';
import {Component} from "react";
import Service from "./services/services";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Head from "./head/head";
import GeneralMainDetails from "./general-details/general-main-details";
import ShowFullProduct from "./show-full-product/show-full-product";
import ShowFullDetails from "./show-full-product/show-full-details/show-full-details";
import LoginMenu from "./login-menu/login-menu";
import ShowFullDetailWrapper from "./show-full-product/show-full-details/show-full-detail-wrapper";
import Reviews from "./reviews/reviews";

export default  class App extends  Component{
    service = new Service()
    render() {
    return (
    <div className="app">
        <Router>
        <Head/>
        <Routes>

            <Route path="/"
                   element={<GeneralMainDetails swapiService={this.service}/>}>
            </Route>

            <Route path="/reviews"
                   element={<Reviews/>}>
            </Route>

            <Route path="/full/" exact
                   element={<ShowFullProduct swapiService={this.service}/>}>
            </Route>

            <Route path="/full/:id"
                   element={<ShowFullDetailWrapper swapiService={this.service}/>}>
            </Route>

            <Route path="/login"
                   element={<LoginMenu/>}>
            </Route>

        </Routes>
        </Router>
    </div>
  );
    }
}


