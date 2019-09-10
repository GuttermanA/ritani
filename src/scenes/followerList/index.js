import React, { Component } from "react";
import { MouseOverAvatar } from "./components";
import { Container } from "components";

class FollowerList extends Component {
  render() {
    const { followerData, children } = this.props;
    const followers = followerData.map(follower => {
      const { avatar_url, login, url, followers_url } = follower;
      return (
        <MouseOverAvatar
          src={avatar_url}
          alt={`${login} follower avatar`}
          url={url}
          followersURL={followers_url}
        />
      );
    });
    return (
      <Container className="fluid container">{followers || children}</Container>
    );
  }
}

export default FollowerList;
