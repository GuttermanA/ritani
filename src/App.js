import React, { Component } from "react";
import { octokit } from "api";
import {
  Search,
  // FollowerList,
  UserInfo
} from "scenes";
import "./App.css";

const defaultState = {
  username: "",
  userData: {},
  disabled: false,
  error: {
    status: false,
    code: null
  }
};

class App extends Component {
  state = defaultState;

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
    const { userData } = this.state;
    return (
      <div>
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <UserInfo userData={userData} />
      </div>
    );
  }
}

export default App;
