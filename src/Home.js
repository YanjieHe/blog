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
            <h5><a onClick={
                () => this.props.history.push(path)}> {title}</a>
                <span className="badge badge-info" id="date-badge">{date}</span></h5>
            <hr/>
            <p>{summary}</p>
        </div>
    }

    render() {
        return <div>
            <div className="jumbotron">
                <div className="container">
                    <h3>何燕杰的博客 (Yanjie He's Blog)</h3>
                    <p>
                        Good things come to those who keep moving forward.
                    </p>
                </div>
            </div>
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