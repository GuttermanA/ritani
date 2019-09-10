import React, { Component } from "react";

class ListItem extends Component {
  render() {
    const { children, content } = this.props;
    return <li>{content || children}</li>;
  }
}

export default ListItem;
