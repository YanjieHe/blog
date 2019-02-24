import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './Home.js'
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import './bootstrap.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Blog from './Blog.js'
import Posts from './Posts.js'
import Categories from "./Categories.js";
import Settings from './Settings.js'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route key="/" path={Settings.home} exact component={Home}/>
            <Route key="/categories" path={Settings.home + "/categories"} exact component={Categories}/>
            {
                Posts.map(post => <Route key={post.path} path={Settings.home + post.path} exact
                                         component={() => <Blog post={post}/>}/>)
            }
        </Switch>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
