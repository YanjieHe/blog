import React from 'react'
import NavBar from './NavBar.js'
import Posts from "./Posts";

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.renderOneCategory = this.renderOneCategory.bind(this)
    }

    renderOneCategory(category, numOfPosts) {
        return <li className="list-group-item d-flex justify-content-between align-items-center">
            {category}
            <span className="badge badge-primary badge-pill">{numOfPosts}</span>
        </li>
    }

    renderBlog(path, title, date, summary) {
        return <div className="shadow p-3 mb-5 bg-white rounded" style={{"width": "100%"}}>
            <h5>
                <span onClick={() => this.props.history.push("/blog" + path)}>
                    {title}
                </span>
                <span className="badge badge-info" id="date-badge">{date}</span></h5>
            <hr/>
            <p>{summary}</p>
        </div>
    }

    render() {
        return <div>
            <NavBar currentPage="Categories"/>
            <div className="row">
                <div className="col-xs-10 col-sm-3" style={{"padding-bottom":"50px"}}>
                    <ul className="list-group">
                        {this.renderOneCategory("C++", 90)}
                        {this.renderOneCategory("Arts", 30)}
                        {this.renderOneCategory("Machine Learning", 5)}
                    </ul>
                </div>
                <div className="col-xs-10 col-sm-7">
                    {
                        Posts.map(
                            post =>
                                this.renderBlog(post.path, post.title, post.date, post.summary)
                        )
                    }
                </div>
            </div>
        </div>
    }
}

export default Categories