import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Button.css";
class Button extends Component {
  static propTypes = {
    as: PropTypes.elementType,
    action: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  };

  static defaultProps = {
    as: "button"
  };

  render() {
    // const ElementType = getElementType(Button, this.props);
    const {
      children,
      className,
      type = "submit",
      name,
      disabled,
      onClick
    } = this.props;
    return (
      <button
        name={name}
        type={type}
        className={className}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
