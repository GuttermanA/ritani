import React, { Component } from "react";
import { MetaData } from "./components";
import { Container, Image } from "components";
import "./UserInfo.css"

class UserInfo extends Component {
  render() {
    const { userData } = this.props;
    const { avatar_url, login } = userData;

    return (
      <Container className="user-info container">
        <Image
          className="search avatar"
          src={avatar_url}
          alt={`${login} user avatar`}
        />
        <MetaData className="search list none" userData={userData} />
      </Container>
    );
  }
}

export default UserInfo;
