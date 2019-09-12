import React, { Component } from "react";
import "./ErrorMessage.css";

class Error extends Component {
  render() {
    const { children, code, message } = this.props;
    return (
      <div className="error">
        {code} - {message}
        {children}
      </div>
    );
  }
}

export default Error;
