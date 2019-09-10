import React, { Component } from "react";
import { octokit } from "api";
import { Search, FollowerList, UserInfo } from "scenes";
import { Error } from "components";
import { isObjectWithKeys } from "lib";
import "./App.css";

const defaultState = {
  username: "",
  userData: {},
  followerData: {},
  followerPage: 1,
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
      .then(res => this.setState({ ...this.state, userData: res.data }))
      .catch(error =>
        this.setState({
          ...this.state,
          error: { status: true, code: error.status, message: error.message }
        })
      );
    // .finally(() => console.log(this.state));
  };

  fetchFollowers = () => {
    octokit.users
      .listFollowersForUser({
        username: this.state.username,
        page: this.state.followerPage
      })
      .then(res => this.setState({ ...this.state, followerData: res.data }))
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
      this.setState({ username: "jim" }, this.handleSubmit);
    }
  };

  handleSubmit = async event => {
    event && event.preventDefault();
    this.setState({ disabled: true });
    await this.userSearch();
    console.log("successfull user search");
    if (!this.state.error.status) this.fetchFollowers();
    console.log("sucessfull follower search");
    this.setState({ disabled: false });
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        ...this.state,
        [name]: value
      }
      // () => console.log(this.state)
    );
  };

  render() {
    const { userData, followerData, error, disabled } = this.state;
    return (
      <div>
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          disabled={disabled}
        />
        {error.status && <Error code={error.code} message={error.message} />}
        {isObjectWithKeys(userData) && <UserInfo userData={userData} />}
        {followerData.length && <FollowerList followerData={followerData} />}
      </div>
    );
  }
}

export default App;
