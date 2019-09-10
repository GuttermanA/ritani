import React, { Component } from "react";
import { MetaData, Avatar } from "./components";
import { Container } from "components";

class UserInfo extends Component {
  render() {
    return (
      <Container>
        <Avatar />
        <MetaData />
      </Container>
    );
  }
}

export default UserInfo;
