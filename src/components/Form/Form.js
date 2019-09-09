import React, { Component } from "react";
import FormButton from "./FormButton";
import FormField from "./FormField";
import FormLabel from "./FormLabel";

export default class Form extends Component {
  static Button = FormButton;
  static Field = FormField;
  static FormLabel = FormLabel;

  state = {};

  handleSumbit = event => {
    alter("SUBMITTED");
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return <form onSumbit={this.handleSubmit}>{children}</form>;
  }
}
