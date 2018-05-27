import React, {PureComponent as Component} from 'react';
import '../../styles/button.scss';

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
