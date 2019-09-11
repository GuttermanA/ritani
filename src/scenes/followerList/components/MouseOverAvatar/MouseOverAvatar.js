import React, { Component, Fragment } from "react";
import { Image } from "components";
import { Button, Container } from "components";
import "./MouseOverAvatar.css";

class MouseOverAvatar extends Component {
  state = { showButton: false };

  handleMouseEnter = event => {
    this.setState({ showButton: true });
  };

  handleMouseLeave = event => {
    this.setState({ showButton: false }, () => console.log(this.state));
  };

  render() {
    const { src, alt, login, url, followersURL, ...rest } = this.props;
    return (
      <Container
        className="avatar-container"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Image className="avatar" src={src} alt={alt} {...rest} />
        {this.state.showButton && (
          <Button className="button absolute">Search</Button>
        )}
      </Container>
    );
  }
}

export default MouseOverAvatar;
