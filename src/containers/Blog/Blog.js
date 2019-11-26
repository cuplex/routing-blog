import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount () {
        axios.get('/posts')
        .then((response) => {
            const posts = response.data.slice(0, 4)
            .map(post => {
                return {
                    ...post, 
                    author: 'Peter'
                }
            })
            this.setState({ posts: posts })
        }
        // , (err) => {
        //     console.log('an error ocurred: ', err);
        // }
        )
        .catch((error) => {
            console.log('catch error: ', error);
            this.setState({ error: true });
        })
    }

    postClickHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    render () {
        const { posts, selectedPostId, error } = this.state

        const postNodes = posts.map((post) => 
            <Post 
                key={post.id}
                title={post.title}
                author={post.author}
                click={() => this.postClickHandler(post.id)}
            />
        );

        const errorMessage = <p style={{textAlign: 'center', color: 'red'}}><strong>An error ocurred</strong></p>

        return (
            <div>
                <section className="Posts">
                    {error ? errorMessage: postNodes}
                </section>
                <section>
                    <FullPost id={selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;