import React, { Component } from "react";
import getElementType from "../../../lib";

class FormButton extends Component {
  handleClick = event => {
    const { disabled } = this.props;
    if (disabled) {
      event.preventDefault();
      return;
    }
    this.props.handleClick && this.props.handleClick();
  };

  render() {
    const ElementType = getElementType(FormButton, props);
    const { children, className, type = "submit", disabled } = this.props;
    return (
      <input type className disabled autoFocus>
        {children}
      </input>
    );
  }
}

export default FormButton;
