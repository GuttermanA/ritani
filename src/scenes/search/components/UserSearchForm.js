import React, { Component } from "react";
import { Form } from "../../../components";

class UserSearchForm extends Component {
  state = {
    username: ""
  };

  handleChange = event => {
    const target = event.target;
    this.setState({ [target.name]: target.value }, () =>
      console.log(this.state)
    );
  };

  render() {
    return (
      <Form>
        <Form.Field
          name="username"
          placeholder="Github Username"
          type="text"
          onChange={this.handleChange}
        />
        <Form.Button>Search</Form.Button>
      </Form>
    );
  }
}

export default UserSearchForm;
