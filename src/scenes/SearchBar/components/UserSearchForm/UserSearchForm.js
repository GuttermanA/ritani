import React, { Component } from "react";
import { Form } from "components";

class UserSearchForm extends Component {
  render() {
    const { handleSubmit, handleChange, disabled, username } = this.props;
    return (
      <Form onSubmit={handleSubmit} data-testid="search-form">
        <Form.Label fieldName="username" data-testid="search-label">
          Enter Github Username to Retrieve Followers
        </Form.Label>
        <Form.Field
          name="username"
          placeholder="Github Username"
          type="text"
          onChange={handleChange}
          value={username}
          required
          data-testid="search-field"
        />
        <Form.Button data-testid="search-button" disabled={disabled}>
          Search
        </Form.Button>
      </Form>
    );
  }
}

export default UserSearchForm;
