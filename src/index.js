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

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/blog/" exact component={Home}/>
            <Route path="/blog/categories/" exact component={Categories}/>
            {
                Posts.map(post =>
                    <Route path={"/blog" + post.path} exact
                           component={() => <Blog title={post.title} date={post.date} content={post.content}/>}/>
                )
            }
        </Switch>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
