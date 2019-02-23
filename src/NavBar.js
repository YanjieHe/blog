import React from 'react'
import {withRouter} from "react-router-dom";

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
                {/*<a className="navbar-brand" href="#">Navbar</a>*/}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                        aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className={this.state.currentPage === "Home" ? "nav-item active" : "nav-item"}>
                            <a className="nav-link" onClick={() => this.props.history.push("/blog/")}>Home <span
                                className="sr-only">(current)</span></a>
                        </li>
                        <li className={this.state.currentPage === "Categories" ? "nav-item active" : "nav-item"}>
                            <a className="nav-link" onClick={() => this.props.history.push("/blog/categories/")}>Categories</a>
                        </li>
                        <li className={this.state.currentPage === "Tags" ? "nav-item active" : "nav-item"}>
                            <a className="nav-link" onClick={() => this.props.history.push("/blog/tags/")}>Tags</a>
                        </li>
                        <li className={this.state.currentPage === "About" ? "nav-item active" : "nav-item"}>
                            <a className="nav-link" onClick={() => this.props.history.push("/blog/about/")}>About</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default withRouter(NavBar)