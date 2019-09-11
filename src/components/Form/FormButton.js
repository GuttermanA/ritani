import React, { Component } from "react";
import Button from "../Button";
import "./Form.css";

class FormButton extends Component {
  render() {
    const {
      children,
      className = "form button",
      type = "submit",
      name,
      disabled,
      ...rest
    } = this.props;
    return (
      <Button
        name={name}
        type={type}
        className={className}
        disabled={disabled}
        {...rest}
      >
        {children}
      </Button>
    );
  }
}

export default FormButton;
