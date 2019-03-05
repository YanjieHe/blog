import React from 'react'
import {createHashHistory} from 'history'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: props.currentPage
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                        aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className={this.state.currentPage === "Home" ? "nav-item active" : "nav-item"}>
                            <span className="nav-link" onClick={() => createHashHistory().push("/")}>Home <span
                                className="sr-only">(current)</span></span>
                        </li>
                        <li className={this.state.currentPage === "Categories" ? "nav-item active" : "nav-item"}>
                            <span className="nav-link"
                                  onClick={() => createHashHistory().push("/categories")}>Categories</span>
                        </li>
                        <li className={this.state.currentPage === "Tags" ? "nav-item active" : "nav-item"}>
                            <span className="nav-link"
                                  onClick={() => createHashHistory().push("/tags")}>Tags</span>
                        </li>
                        <li className={this.state.currentPage === "About" ? "nav-item active" : "nav-item"}>
                            <span className="nav-link"
                                  onClick={() => createHashHistory().push("/about")}>About</span>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar