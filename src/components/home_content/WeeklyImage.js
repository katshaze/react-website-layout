import React, {PureComponent as Component} from 'react';
import HomeAside from './HomeAside';
import Image from '../common/Image';
import Button from '../common/Button';
import Img_CSS from '../../images/css-peter-griffin.png';


class WeeklyImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonText: "See more",
      buttonLink: "#/Photos",
      imageSource: Img_CSS,
      imageAltText: "Family Guy's Peter Griffin struggling with a window blind, with a caption of 'CSS'"
    }
  }

  render() {
    return (
      <div className="weekly-image-div">
        <h4>Image of the week</h4>
        <Image src={this.state.imageSource} alt={this.state.imageAltText}/>
        <Button href={this.state.buttonLink} text={this.state.buttonText}/>
        <hr />
      </div>
    )
  }
}

export default WeeklyImage;
