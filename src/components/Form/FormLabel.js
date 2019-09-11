import React, { Component } from "react";

class FormLabel extends Component {
  render() {
    const {
      children,
      fieldName,
      className = "form label",
      ...rest
    } = this.props;
    return (
      <label className={className} htmlFor={fieldName} {...rest}>
        {children}
      </label>
    );
  }
}

export default FormLabel;
