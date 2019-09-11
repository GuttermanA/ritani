import React, { Component } from "react";
import { UserSearchForm } from "./components";

class Search extends Component {
  render() {
    const { disabled, handleChange, handleSubmit, username } = this.props;
    return (
      <UserSearchForm
        username={username}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        disabled={disabled}
      />
    );
  }
}

export default Search;
