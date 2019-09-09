import React, { Component } from "react";
import { Form } from "components";
import { octokit } from "api";

class UserSearchForm extends Component {
  render() {
    console.log(process.env.REACT_APP_NODE_PATH);
    const { handleSubmit, handleChange, disabled, error } = this.props;
    return (
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
    );
  }
}

export default UserSearchForm;
