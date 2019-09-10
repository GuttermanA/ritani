import React, { Component } from "react";
import { octokit } from "api";
import {
  Search,
  // FollowerList,
  UserInfo
} from "scenes";
import { Error } from "components";
import "./App.css";

const defaultState = {
  username: "guttermana",
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

  componentDidMount = () => {
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

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ disabled: true });
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
    const { userData, error } = this.state;
    return (
      <div>
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {error.status && <Error code={error.code} message={error.message} />}
        <UserInfo userData={userData} />
      </div>
    );
  }
}

export default App;
