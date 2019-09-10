import React, { Component } from "react";
import { MouseOverAvatar, LoadFollowersButton } from "./components";
import { Container } from "components";
import { Button } from "components";

class FollowerList extends Component {
  render() {
    const { followerData, children, remainingPages } = this.props;
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
      <div>
        <Container className="fluid container">{followers}</Container>
        {followerData.length && (
          <LoadFollowersButton remainingPages={remainingPages} />
        )}
      </div>
    );
  }
}

export default FollowerList;
