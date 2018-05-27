import React, {PureComponent as Component} from 'react';
import {Link} from 'react-router-dom'; // destructuring
import '../../styles/post.scss';

class Post extends Component {
  render() {
    return (
      <div className="post-div">
        <a className="post-link" href={this.props.post.url} target="_blank">{this.props.post.title}</a>
        <p className="post-description">{this.props.post.description}</p>
      </div>
    )
  }
}

export default Post;
