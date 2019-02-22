import React from 'react'
import Markdown from 'react-markdown'

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            markdown: "",
            source: props.source
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
        return <Markdown source={post}
                         escapeHtml={false}/>
    }
}

export default Blog