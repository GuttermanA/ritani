import React, { Component } from "react";
import { Form, Container } from "components";

class UserSearchForm extends Component {
  render() {
    const { handleSubmit, handleChange, disabled, error } = this.props;
    return (
      <Container className="menu fluid center container">
        <Form onSubmit={handleSubmit}>
          <Form.Field
            name="username"
            placeholder="Github Username"
            type="text"
            onChange={handleChange}
            required
          />
          <Form.Button className="button" disabled={disabled}>
            Search
          </Form.Button>
        </Form>
      </Container>
    );
  }
}

export default UserSearchForm;
