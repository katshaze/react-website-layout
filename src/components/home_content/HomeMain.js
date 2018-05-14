import React, {PureComponent as Component} from 'react';
import Posts from './Posts';
import '../../styles/home.scss';


class HomeMain extends Component {
  render() {
    return (
      <div className="home-main">
        <Posts />
      </div>
    )
  }
}

export default HomeMain;
