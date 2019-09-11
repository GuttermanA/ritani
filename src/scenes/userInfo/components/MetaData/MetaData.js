import React, { Component } from "react";
import { List } from "components";

class MetaData extends Component {
  render() {
    const { userData, ...rest } = this.props;
    const { login, followers, blog } = userData;
    return (
      <List className="list none" style={{ fontSize: "1.5rem" }}>
        <List.Item style={{ fontWeight: "bold" }}>{login}</List.Item>
        <List.Item>Followers - {followers}</List.Item>
        <List.Item>
          <a href={blog}>{blog}</a>
        </List.Item>
      </List>
    );
  }
}

export default MetaData;
