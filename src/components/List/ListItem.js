import React, { Component } from "react";

class ListItem extends Component {
  render() {
    const { children } = this.props;
    return <li>{children}</li>;
  }
}

export default ListItem;
