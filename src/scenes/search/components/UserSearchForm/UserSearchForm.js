import React, { Component } from "react";
import { Form, Container } from "components";
import { octokit } from "api";

class UserSearchForm extends Component {
  render() {
    console.log(process.env.REACT_APP_NODE_PATH);
    const { handleSubmit, handleChange, disabled, error } = this.props;
    return (
      <Container className="header fluid center container">
        <Form onSubmit={handleSubmit}>
          {error && "ERROR"}
          <Form.Field
            name="username"
            placeholder="Github Username"
            type="text"
            onChange={handleChange}
          />
          <Form.Button disabled={disabled}>Search</Form.Button>
        </Form>
      </Container>
    );
  }
}

export default UserSearchForm;
