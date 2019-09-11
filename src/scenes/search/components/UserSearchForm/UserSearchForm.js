import React, { Component } from "react";
import { Form, Container } from "components";

class UserSearchForm extends Component {
  render() {
    const { handleSubmit, handleChange, disabled, username } = this.props;
    return (
      <Container className="menu fluid center container">
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
      </Container>
    );
  }
}

export default UserSearchForm;
