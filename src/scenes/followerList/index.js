import React, { Component, Fragment } from "react";
import { MouseOverAvatar, LoadFollowersButton } from "./components";
import { Container } from "components";
import uuid from "uuid/v4";

class FollowerList extends Component {
  render() {
    const { followerData, children, lastPage, loadMoreFollowers } = this.props;
    const followers = followerData.map(follower => {
      const { avatar_url, login, url, followers_url } = follower;
      return (
        <MouseOverAvatar
          src={avatar_url}
          alt={`${login} follower avatar`}
          url={url}
          followersURL={followers_url}
          key={uuid()}
        />
      );
    });

    return (
      <Fragment>
        <Container className="fluid container">{followers}</Container>
        <LoadFollowersButton
          lastPage={lastPage}
          loadMoreFollowers={loadMoreFollowers}
        />
        {children}
      </Fragment>
    );
  }
}

export default FollowerList;
