import React from 'react'
import Posts from './Posts.js'
import './Home.css'
import {withRouter} from "react-router-dom";

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.renderBlog = this.renderBlog.bind(this)
    }

    renderBlog(path, title, date, summary) {
        return <div className="container">
            <div className="shadow p-3 mb-5 bg-white rounded">
                <h5>
                <span onClick={() => this.props.history.push("/blog/" + path)}>
                    {title}
                </span>
                    <span className="badge badge-info" id="date-badge">{date}</span></h5>
                <hr/>
                <p>{summary}</p>
            </div>
        </div>
    }

    render() {
        return <div>
            {/*<div className="jumbotron jumbotron-fluid">*/}
            {/*<div className="container">*/}
            {/*<h3>何燕杰的博客 (Yanjie He's Blog)</h3>*/}
            {/*<p>*/}
            {/*Good things come to those who keep moving forward.*/}
            {/*</p>*/}
            {/*</div>*/}
            {/*</div>*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                        aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            {
                Posts.map(
                    post =>
                        this.renderBlog(post.path, post.title, post.date, post.summary)
                )
            }
        </div>
    }
}

export default withRouter(Home)