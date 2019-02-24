import React from 'react'
import Posts from './Posts.js'
import './Home.css'
import NavBar from './NavBar.js'
import Settings from './Settings.js'
import {withRouter} from "react-router-dom";

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.renderBlog = this.renderBlog.bind(this)
    }

    renderBlog(path, title, date, summary) {
        return <div className="shadow p-3 mb-5 bg-white rounded" style={{"width": "100%"}}>
            <h5>
                <span onClick={() => this.props.history.push(Settings.home + path)}>
                    {title}
                </span>
                <span className="badge badge-info" id="date-badge">{date}</span></h5>
            <hr/>
            <p>{summary}</p>
        </div>
    }

    render() {
        return <div>
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