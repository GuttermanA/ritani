import React, { Component } from "react";
import { Form } from "components";

class UserSearchForm extends Component {
  render() {
    const { handleSubmit, handleChange, disabled, username } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Label fieldName="username">
          Enter Github Username to Retrieve Followers
        </Form.Label>
        <Form.Field
          name="username"
          placeholder="Github Username"
          type="text"
          onChange={handleChange}
          value={username}
          required
        />
        <Form.Button disabled={disabled}>Search</Form.Button>
      </Form>
    );
  }
}

export default UserSearchForm;
