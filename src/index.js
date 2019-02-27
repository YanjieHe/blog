import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './Home.js'
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import './bootstrap.css'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Blog from './Blog.js'
import Posts from './Posts.js'
import Categories from "./Categories.js";
import Tags from './Tags.js'
import About from './About.js'

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route key="/" path={"/"} exact component={Home}/>
            <Route key="/categories" path={"/categories"} exact component={Categories}/>
            <Route key="/tags" path={"/tags"} exact component={Tags}/>
            <Route key="/about" path={"/about"} exact component={About}/>
            {
                Posts.map(post => <Route key={post.path} path={post.path} exact
                                         component={() => <Blog post={post}/>}/>)
            }
        </Switch>
    </HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();