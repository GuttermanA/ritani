import React, { Component } from "react";

class ListItem extends Component {
  render() {
    const { children, content, ...rest } = this.props;
    return <li {...rest}>{content || children}</li>;
  }
}

export default ListItem;
