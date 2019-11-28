import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
   

    postClickHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link 
                                to={{
                                pathname: '/new-post',
                                hash: '#totomate',
                                search: '?newHash=true',
                                }}>
                                    New post</Link></li>
                        </ul>
                    </nav>
                </header>

                <section className="Posts">
                    <Route path="/" exact component={Posts}/>
                    <Route path="/new-post"  component={NewPost}/>
                </section>
            </div>
        );
    }
}

export default Blog;