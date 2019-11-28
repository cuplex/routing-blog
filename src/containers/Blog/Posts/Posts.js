import React, { Component } from 'react';
import axios from 'axios';

import './Posts.css'
import Post from '../../../components/Post/Post';

class Posts extends Component {
  state = {
    posts: [],
  }

  componentDidMount () {
    console.log(this.props);
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
          // this.setState({ error: true });
      })
  }

  render () {
    const { posts } = this.state
    
    const postNodes = posts.map((post) => 
          <Post 
              key={post.id}
              title={post.title}
              author={post.author}
              click={() => this.postClickHandler(post.id)}
          />
      );
      // const errorMessage = <p style={{textAlign: 'center', color: 'red'}}><strong>An error ocurred</strong></p>

    return (
      postNodes || null
    );
  }
}

export default Posts;