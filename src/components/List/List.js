import React, { Component } from "react";
import { ListItem } from "./ListItem";

class List extends Component {
  static Item = ListItem;
  render() {
    const { children } = this.props;
    return <ul>{children}</ul>;
  }
}

export default List;
