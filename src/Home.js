import React from 'react'
import Posts from './Posts.js'
import './Home.css'
import NavBar from './NavBar.js'
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
                <span onClick={() => this.props.history.push("/blog" + path)}>
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
            <NavBar currentPage="Home"/>
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