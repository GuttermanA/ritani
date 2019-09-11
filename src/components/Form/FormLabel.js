import React, { Component } from "react";

class FormLabel extends Component {
  render() {
    const { children, fieldName, className = "form label" } = this.props;
    return (
      <label className={className} for={fieldName}>
        {children}
      </label>
    );
  }
}

export default FormLabel;
