import React, { Component } from "react";
import octokit from "../api";

export default class Search extends Component {
  state = {
    loading: false,
    username: "",
    userData: {}
  };

  async fetchUserInfo({ username }) {
    const userData = await octokit.users.getByUsername({
      username
    });

    this.setState({ userData, username });
  }

  render() {}
}
