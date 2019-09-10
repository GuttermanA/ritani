import React, { Component } from "react";

class ListItem extends Component {
  render() {
    const { children, content, style } = this.props;
    return <li style={style}>{content || children}</li>;
  }
}

export default ListItem;
