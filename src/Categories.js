import React from 'react'
import NavBar from './NavBar.js'
import Posts from "./Posts";
import BlogInfo from './BlogInfo.js'

function collectCategories() {
    var categories = {}
    for (var i = 0; i < Posts.length; i++) {
        var category = Posts[i].category
        if (category in categories) {
            categories[category] += 1
        } else {
            categories[category] = 1
        }
    }
    return categories
}

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.renderOneCategory = this.renderOneCategory.bind(this)
        this.state = {
            categories: collectCategories(),
            category: ""
        }
    }


    renderOneCategory(category, numOfPosts) {
        return <li className="list-group-item d-flex justify-content-between align-items-center"
                   onClick={
                       () => this.setState({category: category})
                   }>
            {category}
            <span className="badge badge-primary badge-pill">{numOfPosts}</span>
        </li>
    }

    render() {
        return <div>
            <NavBar currentPage="Categories"/>
            <div className="row">
                <div className="col-xs-10 col-sm-3" style={{"padding-bottom": "50px"}}>
                    <ul className="list-group">
                        {Object.keys(this.state.categories)
                            .map(category =>
                                this.renderOneCategory(category, this.state.categories[category]))}
                    </ul>
                </div>
                <div className="col-xs-10 col-sm-7">
                    {Posts.map(post => {
                        if (this.state.category === "") {
                            return <BlogInfo post={post}/>
                        } else if (this.state.category === post.category) {
                            return <BlogInfo post={post}/>
                        } else {
                            return <span></span>
                        }
                    })}
                </div>
            </div>
        </div>
    }
}

export default Categories