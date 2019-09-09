import React, { Component } from "react";
import PropTypes from "prop-types";
import FormButton from "./FormButton";
import FormField from "./FormField";
// import FormLabel from "./FormLabel";

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
  // static FormLabel = FormLabel;

  // state = {};
  //
  // handleSumbit = event => {
  //   alert("SUBMITTED");
  //   event.preventDefault();
  // };
  //
  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  render() {
    // const ElementType = getElementType(Form, this.props);
    const { action, children, className, handleSubmit, ...rest } = this.props;

    return (
      <form {...rest} action className onSumbit={handleSubmit}>
        {children}
      </form>
    );
  }
}

export default Form;
