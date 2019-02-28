import React from 'react'
import NavBar from "./NavBar.js";
import Posts from "./Posts.js";
import BlogInfo from './BlogInfo.js'
import {createHashHistory} from 'history'

function collectTags() {
    var tags = {}
    for (var i = 0; i < Posts.length; i++) {
        var items = Posts[i].tags
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

function makeTagList(tags) {
    var tagList = {}
    var keys = Object.keys(tags)
    for (var i = 0; i < keys.length; i++) {
        var tag = keys[i]
        tagList[tag] = false
    }
    return tagList
}

class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.renderOneTag = this.renderOneTag.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = {
            tags: collectTags(),
            tagList: makeTagList(collectTags()),
            tag: ""
        }
    }

    handleInputChange(event, tag) {
        const tagList = this.state.tagList
        tagList[tag] = event.target.checked
        this.setState({tagList: tagList});
    }

    renderOneTag(tag, numOfPosts) {
        return <div className="custom-control custom-checkbox" key={tag}>
            <input type="checkbox"
                   className="custom-control-input"
                   id={tag}
                   checked={this.state.tagList[tag]}
                   key={tag}
                   onChange={(event) => this.handleInputChange(event, tag)}/>
            <label className="custom-control-label" htmlFor={tag}>{tag} </label>
        </div>
    }

    render() {
        return <div>
            <NavBar currentPage="Tags"/>
            <div className="row">
                <div className="col-xs-10 col-sm-3" style={{"paddingBottom": "50px"}}>
                    <div className="form-group">
                        {Object.keys(this.state.tags)
                            .map(tag =>
                                this.renderOneTag(tag, this.state.tags[tag]))}
                    </div>
                </div>
                <div className="col-xs-10 col-sm-9">
                    {Posts.map(post => {
                        var items = post.tags
                        for (var i = 0; i < items.length; i++) {
                            if (this.state.tagList[items[i]]) {
                                return <BlogInfo key={post.path} post={post}/>
                            }
                        }
                        return <span key={post.path}></span>
                    })}
                </div>
            </div>
        </div>
    }
}

export default Tags