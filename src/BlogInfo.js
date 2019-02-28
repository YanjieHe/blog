import React from 'react'
import {IoIosPricetag} from 'react-icons/io'
import {createHashHistory} from 'history'

class BlogInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: props.post.path,
            title: props.post.title,
            date: props.post.date,
            summary: props.post.summary,
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
            <p>{this.state.summary}</p>
            <p>{this.state.tags.map(tag => <small><IoIosPricetag/>{tag}&nbsp;&nbsp;</small>)}                </p>
        </div>
    }
}

export default BlogInfo