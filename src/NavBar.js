import React from 'react'
import {withRouter} from "react-router-dom";
import Settings from './Settings.js'
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: props.currentPage
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                        aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className={this.state.currentPage === "Home" ? "nav-item active" : "nav-item"}>
                            <span className="nav-link" onClick={() => this.props.history.push(Settings.home)}>Home <span
                                className="sr-only">(current)</span></span>
                        </li>
                        <li className={this.state.currentPage === "Categories" ? "nav-item active" : "nav-item"}>
                            <span className="nav-link"
                                  onClick={() => this.props.history.push(Settings.home + "/categories")}>Categories</span>
                        </li>
                        <li className={this.state.currentPage === "Tags" ? "nav-item active" : "nav-item"}>
                            <span className="nav-link"
                                  onClick={() => this.props.history.push(Settings.home + "/tags")}>Tags</span>
                        </li>
                        <li className={this.state.currentPage === "About" ? "nav-item active" : "nav-item"}>
                            <span className="nav-link"
                                  onClick={() => this.props.history.push(Settings.home + "/about")}>About</span>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default withRouter(NavBar)