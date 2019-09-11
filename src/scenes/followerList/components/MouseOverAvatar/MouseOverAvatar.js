import React, { Component, Fragment } from "react";
import { Image, Button, Container } from "components";
import "./MouseOverAvatar.css";

class MouseOverAvatar extends Component {
  state = { showButton: false, disabled: false };

  handleMouseEnter = event => {
    this.setState({ showButton: true });
  };

  handleMouseLeave = event => {
    this.setState({ showButton: false }, () => console.log(this.state));
  };

  handleClick = async event => {
    console.log("submitted");
    event.preventDefault();
    event.stopPropagation();
    const { id, fetchUserWithFollowers } = this.props;
    this.setState({ disabled: true });
    await fetchUserWithFollowers(id);
    this.setState({ disabled: false });
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
          <Button className="button absolute" onClick={this.handleClick}>
            Search
          </Button>
        )}
      </Container>
    );
  }
}

export default MouseOverAvatar;
