import React from 'react'
import NavBar from './NavBar.js'
import Posts from "./Posts";
import BlogInfo from './BlogInfo.js'
import './MousePointer.css'


class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.renderOneCategory = this.renderOneCategory.bind(this);
        this.state = {
            categories: Categories.collectCategories(),
            category: ""
        }
    }

    static collectCategories() {
        let categories = {};
        for (let i = 0; i < Posts.length; i++) {
            let category = Posts[i].category;
            if (category in categories) {
                categories[category] += 1
            } else {
                categories[category] = 1
            }
        }
        return categories
    }

    renderOneCategory(category, numOfPosts) {
        let activation = "pointer list-group-item d-flex justify-content-between align-items-center " +
            (category === this.state.category ? "active" : "");
        return <li key={category} className={activation}
                   onClick={() => this.setState({category: category})}>
            {category}
            <span className="badge badge-primary badge-pill">{numOfPosts}</span>
        </li>
    }

    render() {
        return <div>
            <NavBar currentPage="Categories"/>
            <div className="row">
                <div className="col-xs-10 col-sm-3" style={{"paddingBottom": "50px"}}>
                    <ul className="list-group">
                        {Object.keys(this.state.categories)
                            .map(category =>
                                this.renderOneCategory(category, this.state.categories[category]))}
                    </ul>
                </div>
                <div className="col-xs-10 col-sm-9">
                    {Posts.map(post => {
                        if (this.state.category === "") {
                            return <BlogInfo key={post.path} post={post}/>
                        } else if (this.state.category === post.category) {
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

export default Categories