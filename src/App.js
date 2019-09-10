import React, { Component } from "react";
import { octokit } from "api";
import { Search, FollowerList, UserInfo } from "scenes";
import { Error, Button, Container } from "components";
import { isObjectWithKeys, getSearchParamValue } from "lib";
import parse from "parse-link-header";
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
    data: [],
    currentPage: 1,
    links: {}
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

  componentDidMount = () => {
    if (process.env.NODE_ENV === "development") {
      this.setState({ username: "jim" }, this.handleSubmit);
    }
  };

  fetchUser = async () => {
    await octokit.users
      .getByUsername({
        username: this.state.username
      })
      .then(res => {
        this.setState({ userData: res.data });
      })
      .catch(error =>
        this.setState({
          ...this.state,
          error: { status: true, code: error.status, message: error.message }
        })
      )
      .finally(() => console.log(this.state));
  };

  // fetchFollowers = () => {
  //   octokit.users
  //     .listFollowersForUser({
  //       username: this.state.username,
  //       page: this.state.followers.currentPage
  //     })
  //     .then(res => {
  //       console.log(res.headers.link);
  //       const parsedLinkHeader = parse(res.headers.link);
  //       console.log(parsedLinkHeader);
  //       const newState = {
  //         ...this.state,
  //         followers: {
  //           data: this.state.followers.data.concat(res.data),
  //           currentPage: getSearchParamValue(res.url, "page"),
  //           nextPageURL: parsedLinkHeader.next && parsedLinkHeader.next.url,
  //           lastPageURL: parsedLinkHeader.last && parsedLinkHeader.last.url
  //         }
  //       };
  //       this.setState(newState);
  //     })
  //     .catch(error =>
  //       this.setState({
  //         ...this.state,
  //         error: { status: true, code: error.status, message: error.message }
  //       })
  //     )
  //     .finally(() => console.log(this.state));
  // };

  fetchFollowers = async url => {
    // const followersPath = new URL(url).pathname;
    await octokit
      .request(`GET ${url}`)
      .then(res => {
        const parsedLinkHeader = parse(res.headers.link);
        // console.log(parsedLinkHeader);
        const newState = {
          ...this.state,
          followers: {
            data: this.state.followers.data.concat(res.data),
            links: parsedLinkHeader,
            currentPage: parseInt(getSearchParamValue(url, "page"), 10) || 1
          }
        };
        this.setState(newState);
      })
      .catch(error =>
        this.setState({
          ...this.state,
          error: { status: true, code: error.status, message: error.message }
        })
      )
      .finally(() => console.log(this.state));
  };

  handleSubmit = async event => {
    event && event.preventDefault();
    this.setState({ disabled: true });
    await this.fetchUser();
    this.setState({ disabled: false });
    if (!this.state.error.status)
      await this.fetchFollowers(this.state.userData.followers_url);
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

  loadMoreFollowers = event => {
    event && event.preventDefault();
    console.log("Loading more...");
    // const { links } = this.state.followers;
    const nextURL =
      this.state.followers.links.next && this.state.followers.links.next.url;
    nextURL && this.fetchFollowers(nextURL);
  };

  render() {
    const { userData, followers, error, disabled } = this.state;
    const lastPage = !(
      this.state.followers.links && this.state.followers.links.next
    );
    console.log(lastPage);
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
            lastPage={lastPage}
            loadMoreFollowers={this.loadMoreFollowers}
          />
        )}
      </div>
    );
  }
}

export default App;
