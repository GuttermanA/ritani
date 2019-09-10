import React, { Component } from "react";
import { MetaData } from "./components";
import { Container, Image } from "components";

class UserInfo extends Component {
  render() {
    const { userData } = this.props;
    const avatarURL = userData.avatar_url;

    return (
      <Container>
        <Image className="avatar" src={avatarURL} />
        <MetaData userData={userData} />
      </Container>
    );
  }
}

export default UserInfo;
