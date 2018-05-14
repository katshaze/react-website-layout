import React, {PureComponent as Component} from 'react';
import WeeklyImage from './WeeklyImage';
import WeeklyQuote from './WeeklyQuote';
import '../../styles/home.scss';


class HomeAside extends Component {
  render() {
    return (
      <div className="home-aside">
        <WeeklyImage />
        <WeeklyQuote />
      </div>
    )
  }
}

export default HomeAside;
