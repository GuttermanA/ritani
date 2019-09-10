import React, { Component } from "react";
import { List } from "components";

class MetaData extends Component {
  render() {
    const { className, userData, ...rest } = this.props;
    const { login, followers, blog } = userData;
    return (
      <List className={className}>
        <List.Item>Login - {login}</List.Item>
        <List.Item>Follower Count - {followers}</List.Item>
        <List.Item>
          Blog - <a href={blog}>{blog}</a>
        </List.Item>
      </List>
    );
  }
}

export default MetaData;
