import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
// import getElementType from "../../lib";

class FormButton extends Component {
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

  // handleClick = event => {
  //   const { disabled } = this.props;
  //   if (disabled) {
  //     event.preventDefault();
  //     return;
  //   }
  //   this.props.handleClick && this.props.handleClick();
  // };

  render() {
    // const ElementType = getElementType(FormButton, this.props);
    const { children, className, type = "submit", name, disabled } = this.props;
    return (
      <Button name={name} type={type} className={className} disabled={disabled}>
        {children}
      </Button>
    );
  }
}

export default FormButton;
