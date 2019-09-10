import React, { Component } from "react";
import { octokit } from "api";
import {
  Search,
  // FollowerList,
  UserInfo
} from "scenes";
import { Error } from "components";
import { isObjectWithKeys } from "lib";
import "./App.css";

const defaultState = {
  username: "",
  userData: {},
  disabled: false,
  error: {
    status: false,
    code: null,
    message: ""
  }
};

class App extends Component {
  state = defaultState;

  userSearch = () => {
    octokit.users
      .getByUsername({
        username: this.state.username
      })
      .then(res => this.setState({ userData: res.data }))
      .catch(error =>
        this.setState({
          ...this.state,
          error: { status: true, code: error.status, message: error.message }
        })
      )
      .finally(() => console.log(this.state));
  };

  componentDidMount = () => {
    if (process.env.NODE_ENV === "development") {
      this.setState({ username: "guttermana" }, this.userSearch);
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ disabled: true });
    this.userSearch();
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
    const { userData, error, disabled } = this.state;
    return (
      <div>
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          disabled={disabled}
        />
        {error.status && <Error code={error.code} message={error.message} />}
        {isObjectWithKeys(userData) && <UserInfo userData={userData} />}
      </div>
    );
  }
}

export default App;
