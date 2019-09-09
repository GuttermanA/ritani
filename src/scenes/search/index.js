import React, { Component } from "react";
import { UserSearchForm } from "./components";
import octokit from "../../api";

class Search extends Component {
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

  render() {
    return (
      <div>
        <UserSearchForm />
      </div>
    );
  }
}

export default Search;
