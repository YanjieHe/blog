import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap'
import {Badge} from 'react-bootstrap'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.renderBlog = this.renderBlog.bind(this)
    }

    renderBlog(title, date, summary) {
        return <Container>
            <h5>{title} <Badge style={{"float": "right"}} variant="info">{date}</Badge></h5>
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
            {this.renderBlog("A Content-based Movie Recommender System",
                "02/21/2019",
                "I built a content-based movie recommender system. The system only utilizing the content of movies\n" +
                "                    themselves, which solves the cold-start problem. The challenge is how to extract meaningful\n" +
                "                    information from the movies?"
            )}
            <Container>
                <h5>A Content-based Movie Recommender System <Badge style={{"float": "right"}}
                                                                    variant="info">02/21/2019</Badge></h5>
                <hr/>
                <p>I built a content-based movie recommender system. The system only utilizing the content of movies
                    themselves, which solves the cold-start problem. The challenge is how to extract meaningful
                    information from the movies? </p>
            </Container>
            <br/>
            <Container>
                <h5>Sorting Algorithms Visualization with D3.js</h5>
                <hr/>
                <p>asdfasdf</p>
            </Container>
            <br/>
            <Container>
                <h5>Landscape Image Clustering based on Color Histogram</h5>
                <hr/>
                <p>asdfasdf</p>
            </Container>
        </div>
    }
}

export default Home