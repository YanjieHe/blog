import React from 'react'
import Markdown from 'react-markdown'
import './Blog.css'

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            markdown: "",
            source: props.source,
            title: props.title,
            date: props.date
        }
    }

    componentDidMount() {
        fetch(this.state.source)
            .then(response => response.text())
            .then(post => {
                this.setState({markdown: post})
            })
            .catch((err) => console.error(err));
    }

    render() {
        const post = this.state.markdown
        return <div className="container">
            <h3 class="mt-4" id="blog-text">{this.state.title}</h3>
            <p align="right">Posted on {this.state.date}</p>
            <div class="shadow p-3 mb-5 bg-white rounded" id="blog-text">
                <Markdown source={post}
                          escapeHtml={false}/>
            </div>
        </div>
    }
}

export default Blog