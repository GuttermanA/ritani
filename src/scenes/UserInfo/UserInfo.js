import React, { Component } from "react";
import { MetaData } from "./components";
import { Container, Image } from "components";

class UserInfo extends Component {
  render() {
    const { userData, ...rest } = this.props;
    const { avatar_url, login } = userData;

    return (
      <Container className="user-info container">
        <Image
          className="avatar"
          src={avatar_url}
          alt={`${login} user avatar`}
          style={{ minWidth: "9.5rem" }}
        />
        <MetaData userData={userData} />
      </Container>
    );
  }
}

export default UserInfo;
