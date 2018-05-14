import React, {PureComponent as Component} from 'react';

class Button extends Component {
  render() {
    return (
      <div>
        <button className="button-div">
          <a href={this.props.href}>{this.props.text}</a>
        </button>
      </div>
    )
  }
}

export default Button;
