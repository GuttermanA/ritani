import React, { Component } from "react";
import { UserSearchForm } from "./components";

class Search extends Component {
  render() {
    const { disabled, handleChange, handleSubmit } = this.props;
    return (
      <UserSearchForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        disabled={disabled}
      />
    );
  }
}

export default Search;
