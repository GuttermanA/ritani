import React, { Component } from "react";

class FormLabel extends Component {
  render() {
    const { children } = props;
    return <label>{children}</label>;
  }
}

export default FormLabel;
