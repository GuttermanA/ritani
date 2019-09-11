import React, { Component } from "react";
import "./Container.css";

class Container extends Component {
  render() {
    const { className = "container", children, ref, ...rest } = this.props;
    return (
      <div className={className} ref={ref} {...rest}>
        {children}
      </div>
    );
  }
}

export default Container;
