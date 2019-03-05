import React from 'react'
import {createHashHistory} from 'history'

class BlogInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: props.post.path,
            title: props.post.title,
            date: props.post.date,
            summary: props.post.summary,
            category: props.post.category,
            tags: props.post.tags
        }
    }

    render() {
        return <div className="shadow p-3 mb-5 bg-white rounded" style={{"width": "100%"}}>
            <h5>
                <span onClick={() => createHashHistory().push(this.state.path)}>
                    {this.state.title}
                </span>
                <span className="badge badge-info" id="date-badge">{this.state.date}</span></h5>
            <hr/>
            <p onClick={() => createHashHistory().push(this.state.path)}>{this.state.summary}</p>
            <span>{this.state.tags.map(tag =>
                <span key={tag}><span className="badge badge-pill badge-light"
                                      key={tag}>{tag}</span>&nbsp;&nbsp;</span>
            )}</span>
        </div>
    }
}

export default BlogInfo