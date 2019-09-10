import React, { Component } from "react";
import { octokit } from "api";
import { Search, FollowerList, UserInfo } from "scenes";
import { Error, Button, Container } from "components";
import { isObjectWithKeys, getSearchParamValue } from "lib";
import "./App.css";

const followersPerPage = 30;

const calcRemaingingPages = (page, followers) => {
  const pagesRequired = Math.ceil(followers / followersPerPage);
  return pagesRequired - page;
};

const defaultState = {
  username: "",
  userData: {},
  followers: {
    data: {},
    page: 1,
    lastPage: null
  },
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
      );
    // .finally(() => console.log(this.state));
  };

  fetchFollowers = page => {
    octokit.users
      .listFollowersForUser({
        username: this.state.username,
        page: page || this.state.followers.page
      })
      .then(res => {
        this.setState({
          ...this.state,
          followers: {
            data: res.data,
            page: getSearchParamValue(res.url, "page")
          }
        });
      })
      // .then(res => this.setState({ followerData: res.data }))
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
    const { userData, followers, error, disabled } = this.state;
    const remainingPages = calcRemaingingPages(
      followers.page,
      userData.followers
    );
    return (
      <div>
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          disabled={disabled}
        />
        {error.status && <Error code={error.code} message={error.message} />}
        {isObjectWithKeys(userData) && <UserInfo userData={userData} />}
        {followers.data.length && (
          <FollowerList
            followerData={followers.data}
            remainingPages={remainingPages}
          />
        )}
      </div>
    );
  }
}

export default App;
