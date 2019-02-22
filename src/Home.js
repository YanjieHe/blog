import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap'
import {Badge} from 'react-bootstrap'
import Posts from './Posts.js'
import {withRouter} from "react-router-dom";

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.renderBlog = this.renderBlog.bind(this)
    }

    renderBlog(path, title, date, summary) {
        return <Container>
            <h5><a onClick={
                () => this.props.history.push(path)}> {title}</a>
                <Badge style={{"float": "right"}}
                       variant="info">{date}</Badge></h5>
            <hr/>
            <p>{summary}</p>
        </Container>
    }

    render() {
        return <div>
            <Jumbotron fluid>
                <Container>
                    <h3>何燕杰的博客 (Yanjie He's Blog)</h3>
                    <p>
                        Good things come to those who keep moving forward.
                    </p>
                </Container>

            </Jumbotron>
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