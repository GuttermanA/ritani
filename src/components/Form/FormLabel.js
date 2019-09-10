import React, { Component } from "react";

class FormLabel extends Component {
  render() {
    const { children } = this.props;
    return <label>{children}</label>;
  }
}

export default FormLabel;
