import React from 'react'
import Markdown from 'react-markdown'
import './Blog.css'
import NavBar from "./NavBar.js";

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            markdown: props.content,
            title: props.title,
            date: props.date
        }
    }

    render() {
        return <div>
            <NavBar currentPage="Home"/>
            <div className="container">
                <div class="shadow p-3 mb-5 bg-white rounded">
                    <h3 className="mt-4">{this.state.title}</h3>
                    <p align="right">Posted on {this.state.date}</p>
                    <Markdown source={this.state.markdown}
                              escapeHtml={false}/>
                </div>
            </div>
        </div>
    }
}

export default Blog