import React, { Component } from "react";
import "./Container.css";

class Container extends Component {
  render() {
    const { className = "container", children, ...rest } = this.props;
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }
}

export default Container;
