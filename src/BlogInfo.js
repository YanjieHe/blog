import React from 'react'
import {withRouter} from "react-router-dom";

class BlogInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: props.post.path,
            title: props.post.title,
            date: props.post.date,
            summary: props.post.summary
        }
    }

    render() {
        return <div className="shadow p-3 mb-5 bg-white rounded" style={{"width": "100%"}}>
            <h5>
                <span onClick={() => this.props.history.push("/blog" + this.state.path)}>
                    {this.state.title}
                </span>
                <span className="badge badge-info" id="date-badge">{this.state.date}</span></h5>
            <hr/>
            <p>{this.state.summary}</p>
        </div>
    }
}

export default withRouter(BlogInfo)