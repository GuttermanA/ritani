import React, { Component } from "react";

class FormField extends Component {
  render() {
    const { className, type, name, required, placeholder } = this.props;
    return <input className type name required placeholder />;
  }
}

export default FormField;
