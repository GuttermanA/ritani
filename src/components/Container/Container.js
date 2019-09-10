import React, { Component } from "react";
import "./Container.css";

class Container extends Component {
  render() {
    const { className, children } = this.props;
    return <div className={className}>{children}</div>;
  }
}

export default Container;
