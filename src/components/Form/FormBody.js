import React, { Component } from "React";

export default class FormBody extends Component {
  state = {};

  render() {
    const { children } = this.props;
    return <form>{children}</form>;
  }
}
