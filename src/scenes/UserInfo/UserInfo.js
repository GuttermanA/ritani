import React, { Component } from "react";
import { MetaData } from "./components";
import { Container, Image } from "components";
import "./UserInfo.css";

class UserInfo extends Component {
  render() {
    const { userData } = this.props;
    const { avatar_url, login } = userData;

    return (
      <Container
        className="user-info container"
        data-testid="user-info-container"
      >
        <Image
          data-testid="user-info-avatar"
          className="search avatar"
          src={avatar_url}
          alt={`${login} user avatar`}
        />
        <MetaData
          data-testid="user-info-metadata"
          className="search list none"
          userData={userData}
        />
      </Container>
    );
  }
}

export default UserInfo;
