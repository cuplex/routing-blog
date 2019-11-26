import React, { Component } from 'react';

import './FullPost.css';
import axios from '../../axios'; //this is custom axios instance from axios.js

class FullPost extends Component {

    state = {
        loadedPost: null,
    }

    componentDidUpdate () {
        if (this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('/posts/' + this.props.id)
                .then(( { data } ) => {
                    console.log({data})
                    this.setState({ loadedPost: data });
                },
                (err) => {
                    console.log('axios error: ', err)
                })               
            }
        }
    }

    deletePost = (id) => {
        axios.delete('/posts/' + id)
        .then((response) => {
            console.log({response});
        })
        .catch((error) => {
            console.log({error});
        })
    }

    render () {
        const { id } = this.props
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
        }

        if (id && this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={() => this.deletePost(id)}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;