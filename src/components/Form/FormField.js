import React, { Component } from "react";
import "./Form.css";

class FormField extends Component {
  render() {
    const {
      className = "form field",
      type = "text",
      name,
      required,
      placeholder,
      onChange,
      onFocus,
      value,
      ...rest
    } = this.props;
    return (
      <input
        className={className}
        type={type}
        name={name}
        required
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
        {...rest}
      />
    );
  }
}

export default FormField;
