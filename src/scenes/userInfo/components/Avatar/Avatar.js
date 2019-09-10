import React, { Component } from "react";

class Avatar extends Component {
  render() {
    const { className, src, alt, ...rest } = this.props;
    return <img className={className} src={src} alt={alt} />;
  }
}

export default Avatar;
