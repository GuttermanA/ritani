import React, { Component } from "react";
import "./Button.css";
class Button extends Component {
  render() {
    // const ElementType = getElementType(Button, this.props);
    const {
      children,
      className,
      type = "submit",
      name,
      disabled,
      onClick,
      ...rest
    } = this.props;
    return (
      <button
        name={name}
        type={type}
        className={className}
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    );
  }
}

export default Button;
