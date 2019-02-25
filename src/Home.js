import React from 'react'
import Posts from './Posts.js'
import './Home.css'
import NavBar from './NavBar.js'
import BlogInfo from './BlogInfo.js'

class Home extends React.Component {
    render() {
        return <div>
            <NavBar currentPage="Home"/>
            {Posts.map(post => <BlogInfo post={post}/>)}
        </div>
    }
}

export default Home