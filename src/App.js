import React, { Component } from "react";
import { octokit } from "api";
import { SearchBar, FollowerList, UserInfo } from "scenes";
import { ErrorMessage, Container } from "components";
import { isObjectWithKeys, getSearchParamValue } from "lib";
import parse from "parse-link-header";

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

  async componentDidMount() {
    if (process.env.NODE_ENV === "development") {
      this.setState({ username: "jim" }, this.fetchUserWithFollowers);
    }
  }

  fetchUser = async username => {
    await octokit.users
      .getByUsername({
        username: username || this.state.username
      })
      .then(res => {
        this.setState({ username: res.data.login, userData: res.data });
      })
      .catch(error =>
        this.setState({
          ...this.state,
          error: { status: true, code: error.status, message: error.message }
        })
      );
    // .finally(() => console.log(this.state));
  };

  fetchFollowers = async url => {
    await octokit
      .request(`GET ${url}`)
      .then(res => {
        const parsedLinkHeader = parse(res.headers.link);
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
      );
    // .finally(() => console.log(this.state));
  };

  fetchUserWithFollowers = async newUserName => {
    const { userData, username } = this.state;
    // debugger;
    if (
      username === newUserName ||
      (!newUserName &&
        username === (isObjectWithKeys(userData) && userData.login))
    )
      return;
    // debugger;

    this.setState({ ...defaultState });

    await this.fetchUser(newUserName);
    if (!this.state.error.status)
      await this.fetchFollowers(this.state.userData.followers_url);
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ disabled: true });
    await this.fetchUserWithFollowers();
    this.setState({ disabled: false });
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ ...this.state, [name]: value });
  };

  loadMoreFollowers = async event => {
    event && event.preventDefault();
    const nextURL =
      this.state.followers.links.next && this.state.followers.links.next.url;
    if (nextURL) await this.fetchFollowers(nextURL);
  };

  render() {
    const { userData, followers, error, disabled, username } = this.state;
    const lastPage = !(
      this.state.followers.links && this.state.followers.links.next
    );
    return (
      <div data-testid="app">
        <div className="sticky-top" data-testid="sticky-div">
          <SearchBar
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            disabled={disabled}
            username={username}
          />
          {isObjectWithKeys(userData) && <UserInfo userData={userData} />}
        </div>
        {error.status && (
          <ErrorMessage code={error.code} message={error.message} />
        )}

        {followers.data.length ? (
          <FollowerList
            followerData={followers.data}
            lastPage={lastPage}
            page={followers.currentPage}
            loadMoreFollowers={this.loadMoreFollowers}
            fetchUserWithFollowers={this.fetchUserWithFollowers}
          />
        ) : (
          <Container className="fluid message container">
            <h1> No Followers Yet</h1>
          </Container>
        )}
      </div>
    );
  }
}

export default App;
