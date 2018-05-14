import React, {PureComponent as Component} from 'react';
import Img_CSS from '../../images/css-peter-griffin.png';
import Image from '../common/Image';


class PhotosAside extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageSource: Img_CSS
    }
  }

  render() {
    return (
      <div>
        <h4>Previous Images of the Week</h4>
        <Image src={this.state.imageSource}/>
        <Image src={this.state.imageSource}/>
      </div>
    )
  }
}

export default PhotosAside;
