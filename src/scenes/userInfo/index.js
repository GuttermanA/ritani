import React, { Component } from "react";
import { MetaData } from "./components";
import { Container, Image } from "components";

class UserInfo extends Component {
  render() {
    const { userData } = this.props;
    const { avatar_url, login } = userData;

    return (
      <Container>
        <Image
          className="avatar"
          src={avatar_url}
          alt={`${login} user avatar`}
          style={{ width: "25%" }}
        />
        <MetaData userData={userData} />
      </Container>
    );
  }
}

export default UserInfo;
