import React, { Component } from "react";
import { List } from "components";

class MetaData extends Component {
  render() {
    const { userData, className, ...rest } = this.props;
    const { login, followers, blog, html_url } = userData;
    return (
      <List className={className} data-testid="meta-list" {...rest}>
        <List.Item style={{ fontWeight: "bold" }} data-testid="meta-list-login">
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="login-link"
          >
            {login}
          </a>
        </List.Item>
        <List.Item data-testid="meta-list-followers">
          Followers - {followers}
        </List.Item>
        <List.Item data-testid="meta-list-blog">
          <a
            href={blog}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="blog-link"
          >
            {blog}
          </a>
        </List.Item>
      </List>
    );
  }
}

export default MetaData;
