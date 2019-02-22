import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './Home.js'
import './bootstrap.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Blog from './Blog.js'
import Posts from './Posts.js'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            {
                Posts.map(post =>
                    <Route path={post.path} exact
                           component={() => <Blog title={post.title} date={post.date} source={post.source}/>}></Route>
                )
            }
        </Switch>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
