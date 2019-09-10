import React, { Component } from "react";
import { MetaData, Avatar } from "./components";
import { Container } from "components";

class UserInfo extends Component {
  render() {
    const { userData } = this.props;
    const avatarURL = userData.avatar_url;

    return (
      <Container>
        <Avatar src={avatarURL} />
        <MetaData userData={userData} />
      </Container>
    );
  }
}

export default UserInfo;
