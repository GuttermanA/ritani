import React, { Component } from "react";
import { UserSearchForm } from "./components";
import { octokit } from "../../api";

const defaultState = {
  username: "",
  data: {},
  disabled: false,
  error: {
    status: false,
    code: null
  }
};

class Search extends Component {
  state = defaultState;

  handleSubmit = event => {
    event.preventDefault();
    alert("Submitted");
    this.setState({ disabled: true });
    octokit.users
      .getByUsername({
        username: this.state.username
      })
      .then(res => this.setState({ data: res.data }))
      .catch(error =>
        this.setState({
          ...this.state,
          error: { status: true, code: error.status }
        })
      )
      .finally(() => console.log(this.state));
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        ...this.state,
        [name]: value
      },
      () => console.log(this.state)
    );
  };

  render() {
    const { disabled, error } = this.state;
    return (
      <div>
        <UserSearchForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          disabled={disabled}
        />
        {error.status === true && error.code}
      </div>
    );
  }
}

export default Search;
