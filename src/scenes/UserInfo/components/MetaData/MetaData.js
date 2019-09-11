import React, { Component } from "react";
import { List } from "components";

class MetaData extends Component {
  render() {
    const { userData } = this.props;
    const { login, followers, blog, html_url } = userData;
    return (
      <List className="list none" style={{ fontSize: "1.5rem" }}>
        <List.Item style={{ fontWeight: "bold" }}>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            {login}
          </a>
        </List.Item>
        <List.Item>Followers - {followers}</List.Item>
        <List.Item>
          <a href={blog} target="_blank" rel="noopener noreferrer">
            {blog}
          </a>
        </List.Item>
      </List>
    );
  }
}

export default MetaData;
