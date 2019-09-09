import React, { Component } from "react";

class FormField extends Component {
  render() {
    const {
      className,
      type = "text",
      name,
      required,
      placeholder,
      onChange
    } = this.props;
    return (
      <input
        className={className}
        type={type}
        name={name}
        required
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
}

export default FormField;
