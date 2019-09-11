import React, { Component } from "react";
import PropTypes from "prop-types";
import FormButton from "./FormButton";
import FormField from "./FormField";
import FormLabel from "./FormLabel";

class Form extends Component {
  static propTypes = {
    as: PropTypes.elementType,
    action: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    as: "form"
  };

  static Button = FormButton;
  static Field = FormField;
  static Label = FormLabel;

  render() {
    const { action, children, className, onSubmit, ...rest } = this.props;

    return (
      <form {...rest} action={action} className={className} onSubmit={onSubmit}>
        {children}
      </form>
    );
  }
}

export default Form;
