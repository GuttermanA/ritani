import React, { Component } from "react";
import PropTypes from "prop-types";

class Avatar extends Component {
  render() {
    const { className, src, alt, ...rest } = this.props;
    return <img className={className} src={src} alt={alt} />;
  }
}

export default Avatar;
