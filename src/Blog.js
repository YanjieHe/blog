import React from 'react'
import marked from 'react-marked'
import './Blog.css'
import NavBar from "./NavBar.js";
import Settings from './Settings.js'


class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            markdown: "",
            title: props.post.title,
            date: props.post.date,
            fileName: props.post.fileName
        }
    }

    componentDidMount() {
        const url = Settings.blogPrefix + this.state.fileName
        fetch(url)
            .then(response => response.text())
            .then(
                text => this.setState({markdown: text})
            )
    }

    render() {
        return <div>
            <NavBar currentPage="Home"/>
            <div className="shadow p-3 mb-5 bg-white rounded">
                <h3 className="mt-4">{this.state.title}</h3>
                <p align="right">Posted on {this.state.date}</p>
                <div dangerouslySetInnerHTML={{__html: marked(this.state.markdown, {sanitize: true})}}/>
                {/*<ReactMarkdown source={this.state.markdown}*/}
                {/*escapeHtml={false}/>*/}
            </div>
        </div>
    }
}

export default Blog