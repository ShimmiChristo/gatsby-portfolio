import React from "react";


export default class ImageLoader extends React.Component {

  state = {
    loaded: false

  };

  render() {
    const { img, alt, styles } = this.props;
    // const { loaded } = this.state;
    // const currentState = loaded ? src : Base64;

    return (
      <div className="portfolio-item-image" style={styles}>
        <img 
          {...this.props} src={img} alt={alt}
          />
      </div>
    )
  }

}

