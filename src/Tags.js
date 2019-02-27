import React from 'react'
import NavBar from "./NavBar.js";
import Posts from "./Posts.js";
import BlogInfo from './BlogInfo.js'

function collectTags() {
    var tags = {}
    for (var i = 0; i < Posts.length; i++) {
        var items = Posts[i].tags.split("|")
        for (var j = 0; j < items.length; j++) {
            var tag = items[j]
            if (tag in tags) {
                tags[tag] += 1
            } else {
                tags[tag] = 1
            }
        }
    }
    return tags
}

class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.renderOneTag = this.renderOneTag.bind(this)
        this.state = {
            tags: collectTags(),
            tag: ""
        }
    }


    renderOneTag(tag, numOfPosts) {
        return <li key={tag} className="list-group-item d-flex justify-content-between align-items-center"
                   onClick={
                       () => this.setState({tag: tag})
                   }>
            {tag}
            <span className="badge badge-primary badge-pill">{numOfPosts}</span>
        </li>
    }

    render() {
        return <div>
            <NavBar currentPage="Tags"/>
            <div className="row">
                <div className="col-xs-10 col-sm-3" style={{"paddingBottom": "50px"}}>
                    <ul className="list-group">
                        {Object.keys(this.state.tags)
                            .map(tag =>
                                this.renderOneTag(tag, this.state.tags[tag]))}
                    </ul>
                </div>
                <div className="col-xs-10 col-sm-9">
                    {Posts.map(post => {
                        if (this.state.tag === "") {
                            return <BlogInfo key={post.path} post={post}/>
                        } else if (post.tags.split("|").indexOf(this.state.tag) >= 0) {
                            return <BlogInfo key={post.path} post={post}/>
                        } else {
                            return <span></span>
                        }
                    })}
                </div>
            </div>
        </div>
    }
}

export default Tags