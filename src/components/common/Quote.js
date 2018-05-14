import React, {PureComponent as Component} from 'react';

class Quote extends Component {
  render() {
    return (
      <div className="quote-div">
        <p className="quote">{this.props.quote}</p>
        <p className="quoted-person">- {this.props.person}</p>
      </div>
    )
  }
}

export default Quote;
