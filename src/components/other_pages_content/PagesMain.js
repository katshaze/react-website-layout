import React, {PureComponent as Component} from 'react';
import Post from '../common/Post';

class PagesMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page1: {
        title: "Page - Subject matter 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      page2: {
        title: "Page - Subject matter 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      page3: {
        title: "Page - Subject matter 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    }
  }
  render() {
    return (
      <div>
        <h3>View our major pages here</h3>
        <Post post={this.state.page1}/>
        <hr />
        <Post post={this.state.page2}/>
        <hr />
        <Post post={this.state.page3}/>
        <hr />
      </div>
    )
  }
}

export default PagesMain;
