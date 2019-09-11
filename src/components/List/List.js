import React, { Component } from "react";
import ListItem from "./ListItem";
import "./List.css";

class List extends Component {
  static Item = ListItem;

  render() {
    const { children, className, items = [], ...rest } = this.props;
    const itemComponents =
      items.length &&
      items.map(item => {
        return <ListItem content={item.data} />;
      });
    return (
      <ul className={className} {...rest}>
        {(itemComponents.length && itemComponents) || children}
      </ul>
    );
  }
}

export default List;
