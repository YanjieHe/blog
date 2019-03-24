import React from 'react'
import {createHashHistory} from 'history'
import './MousePointer.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: props.currentPage
        };
    }

    renderNavItem(pageName, path) {
        let activation = this.state.currentPage === pageName ? "nav-item active" : "nav-item";
        return (<li className={activation}>
            <span className="nav-link pointer"
                  onClick={() => createHashHistory().push(path)}>{pageName}</span>
        </li>);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                        aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        {this.renderNavItem("Home", "/")}
                        {this.renderNavItem("Categories", "/categories")}
                        {this.renderNavItem("Tags", "/tags")}
                        {this.renderNavItem("About", "/about")}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar