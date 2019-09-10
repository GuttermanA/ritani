import React, { Component } from "react";
import "./Image.css";

class Image extends Component {
  render() {
    const { className, src, alt, ...rest } = this.props;
    return <img className={className} src={src} alt={alt} />;
  }
}

export default Image;
