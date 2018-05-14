import React, {PureComponent as Component} from 'react';

class Image extends Component {
  render() {
    return (
      <div className="image-div">
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    )
  }
}

export default Image;
