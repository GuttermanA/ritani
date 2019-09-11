import React, { Component } from "react";
import FormButton from "./FormButton";
import FormField from "./FormField";
import FormLabel from "./FormLabel";

class Form extends Component {
  static Button = FormButton;
  static Field = FormField;
  static Label = FormLabel;

  render() {
    const {
      action,
      children,
      className,
      onSubmit,
      value,
      ...rest
    } = this.props;

    return (
      <form {...rest} action={action} className={className} onSubmit={onSubmit}>
        {children}
      </form>
    );
  }
}

export default Form;
