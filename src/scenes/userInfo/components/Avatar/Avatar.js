import React, { Component } from "react";
import "./Avatar.css";

class Avatar extends Component {
  render() {
    const { className = "avatar", src, alt, ...rest } = this.props;
    return <img className={className} src={src} alt={alt} />;
  }
}

export default Avatar;
