import "./main-page-admin.css"
import React, {Component} from "react";


export default class MainPageAdmin extends Component {
    render() {
        return (
            <div className="body-admin">

                <div className="head-admin">Админ панель</div>

                <div className="examples-block">
                    <div className="examples"><input type="file"/>
                        <img className="examples-img" width="200px" height="300px" />
                    </div>
                    <div className="examples"><input type="file"/>
                        <img className="examples-img" width="200px" height="300px" />
                    </div>
                    <div className="examples"><input type="file"/>
                        <img className="examples-img" width="200px" height="300px" />
                    </div>
                    <div className="examples"><input type="file"/>
                        <img className="examples-img" width="200px" height="300px" />
                    </div>
                </div>


            </div>
        )
    }
}