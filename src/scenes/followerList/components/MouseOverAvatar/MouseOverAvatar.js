import React, { Component, Fragment } from "react";
import { Image, Button, Container } from "components";
import "./MouseOverAvatar.css";

class MouseOverAvatar extends Component {
  state = { showButton: false, disabled: false };

  handleMouseEnter = event => {
    this.setState({ showButton: true });
  };

  handleMouseLeave = event => {
    this.setState({ showButton: false });
  };

  handleClick = async event => {
    event.preventDefault();
    event.stopPropagation();
    const { id, fetchUserWithFollowers } = this.props;
    this.setState({ disabled: true });
    await fetchUserWithFollowers(id);
    this.setState({ disabled: false });
  };

  render() {
    const { src, alt, id, url, followersURL, ...rest } = this.props;
    const { disabled } = this.props;
    return (
      <Container
        className="avatar-container"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Image className="avatar" src={src} alt={alt} {...rest} />
        {this.state.showButton && (
          <Button
            className="button absolute"
            onClick={this.handleClick}
            disabled={disabled}
          >
            {id}
          </Button>
        )}
      </Container>
    );
  }
}

export default MouseOverAvatar;
