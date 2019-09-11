import React, { Component } from "react";
import { Container } from "components";
import { UserSearchForm } from "./components";

class Search extends Component {
  render() {
    const { disabled, handleChange, handleSubmit, username } = this.props;
    return (
      <Container className="menu fluid center container">
        <UserSearchForm
          username={username}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          disabled={disabled}
        />
        <a
          style={{ color: "white" }}
          href="https://github.com/GuttermanA/ritani"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="github-repo-link"
        >
          Github Repository
        </a>
      </Container>
    );
  }
}

export default Search;
