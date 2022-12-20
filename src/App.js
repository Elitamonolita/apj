import './App.css';
import Head from "./head/head";
import List from "./list/list";
import {Component} from "react";
import Service from "./services/services";
import Details from "./list/list-details/details";

export default  class App extends  Component{
    service = new Service()
    render() {
    return (
    <div>
        <div className="main-margin">
      <Head/>
         </div>
        <List/>
        <Details swapiService={this.service}/>
    </div>
  );
    }
}


