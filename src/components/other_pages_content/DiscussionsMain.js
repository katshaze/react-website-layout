import React, {PureComponent as Component} from 'react';
import Post from '../common/Post';

class DiscussionsMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discussion1: {
        title: "Discussion Topic 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      discussion2: {
        title: "Discussion Topic 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      discussion3: {
        title: "Discussion Topic 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    }

  }
  render() {
    return (
      <div>
        <h3>Browse our top discussion topics</h3>
        <Post post={this.state.discussion1}/>
        <hr />
        <Post post={this.state.discussion2}/>
        <hr />
        <Post post={this.state.discussion3}/>
        <hr />
      </div>
    )
  }
}

export default DiscussionsMain;
