import React, { Component } from "react";
import { Image } from "components";
import "./MouseOverAvatar.css";

class MouseOverAvatar extends Component {
  render() {
    const { src, alt, login, url, followersURL } = this.props;
    return (
      <Image className="avatar follower" src={src} alt="Follower avatar" />
    );
  }
}

export default MouseOverAvatar;

// <div className="follower-container">
//   <Image className="image" src={src} alt="Follower avatar" />
//   <div className="middle">
//     <div className="text">{login}</div>
//   </div>
// </div>
