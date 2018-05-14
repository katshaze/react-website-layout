import React, {PureComponent as Component} from 'react';
import HomeAside from './HomeAside';
import Button from '../common/Button';
import Quote from '../common/Quote';

class WeeklyQuote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonText: "More quotes",
      buttonLink: "#/More",
      quoteText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque ligula orci, rutrum eget ex ac, condimentum ultrices.",
      quotedPerson: "Johnny Five"
    }
  }
  render() {
    return (
      <div className="weekly-quote-div">
        <h4>Quote of the week</h4>
        <Quote quote={this.state.quoteText} person={this.state.quotedPerson}/>
        <Button href={this.state.buttonLink} text={this.state.buttonText}/>
      </div>
    )
  }
}

export default WeeklyQuote;
