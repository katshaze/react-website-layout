import React, {PureComponent as Component} from 'react';
import Quote from '../common/Quote'

class MoreAside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote1: {
        quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        person: "Joe Bloggs"
      },
      quote2: {
        quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        person: "Jane Smith"
      },
      quote3: {
        quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        person: "John Smith"
      }
    }
  }

  render() {
    return (
      <div>
        <h4>Get your daily fix of quotes here.</h4>
        <Quote quote={this.state.quote1.quote} person={this.state.quote1.person}/>
        <Quote quote={this.state.quote2.quote} person={this.state.quote2.person}/>
        <Quote quote={this.state.quote3.quote} person={this.state.quote3.person}/>
      </div>
    )
  }

}

export default MoreAside;
