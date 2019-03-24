import React from 'react'
import {createHashHistory} from 'history'
// import './BlogInfo.css'
import './MousePointer.css'

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
        let tagsInfo = this.state.tags.map(tag =>
            <span key={tag}><span className="badge badge-pill badge-secondary"
                                  key={tag}>{tag}</span>&nbsp;&nbsp;</span>
        );
        return <div className="shadow p-3 mb-5 bg-white rounded" style={{"width": "100%"}}>
            <h5>
                <span className="pointer" onClick={() => createHashHistory().push(this.state.path)}>
                    {this.state.title}
                </span>
                <span className="badge badge-info" id="date-badge">{this.state.date}</span></h5>
            <hr/>
            <p onClick={() => createHashHistory().push(this.state.path)}>{this.state.summary}</p>
            <span>{tagsInfo}</span>
        </div>
    }
}

export default BlogInfo