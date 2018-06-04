import React, {PureComponent as Component} from 'react';
import HomeMain from './HomeMain';
import Post from '../common/Post';
import blogPosts from '../../data/top-posts-json.js';

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post1: blogPosts[0],
      post2: blogPosts[1],
      post3: blogPosts[2],
      post4: blogPosts[3],
      post5: blogPosts[4]
    }
  }

  // NOTE: Data for posts could be imported here from an external server via an AJAX request. For now however, the data is saved in the project folder, and the first five blog posts are passed down to be rendered in the Post componenets.
  // e.g. axios request to server for list of top posts (would need to install and import axios)
    // const fetchPosts = function() {
    //   axios.get(POSTS_SERVER_URL).then(function(response) {
    //     // push the top five blog posts to an array
    //     // set the state with those first five items from the array
    //   }.bind(this));
    // }.bind(this);
    // fetchPosts();

  render() {
    return (
      <div>
        <h3>Top five posts</h3>
        <Post post={this.state.post1}/>
        <hr />
        <Post post={this.state.post2}/>
        <hr />
        <Post post={this.state.post3}/>
        <hr />
        <Post post={this.state.post4}/>
        <hr />
        <Post post={this.state.post5}/>
      </div>
    )
  }
}

export default Posts;
