import React, { Component } from "react";
import { octokit } from "api";
import { Search, FollowerList, UserInfo } from "scenes";
import { Error, Container } from "components";
import { isObjectWithKeys, getSearchParamValue } from "lib";
import parse from "parse-link-header";
import "./App.css";

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

  componentDidMount() {
    if (process.env.NODE_ENV === "development") {
      this.setState({ username: "jim" }, this.handleSubmit);
    }
  }

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

  fetchFollowers = async url => {
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

    this.setState({ ...defaultState, disabled: true });
    await this.fetchUser();
    this.setState({ disabled: false });
    if (!this.state.error.status)
      await this.fetchFollowers(this.state.userData.followers_url);
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

  loadMoreFollowers = async event => {
    event && event.preventDefault();
    console.log("Loading more...");
    // const { links } = this.state.followers;
    const nextURL =
      this.state.followers.links.next && this.state.followers.links.next.url;
    if (nextURL) await this.fetchFollowers(nextURL);
  };

  render() {
    const { userData, followers, error, disabled } = this.state;
    const lastPage = !(
      this.state.followers.links && this.state.followers.links.next
    );
    console.log(lastPage);
    return (
      <Container className="main-container">
        <div className="sticky-top">
          <Search
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            disabled={disabled}
          />
          {error.status && <Error code={error.code} message={error.message} />}
          {isObjectWithKeys(userData) && <UserInfo userData={userData} />}
        </div>
        {followers.data.length ? (
          <FollowerList
            followerData={followers.data}
            lastPage={lastPage}
            loadMoreFollowers={this.loadMoreFollowers}
          />
        ) : (
          <Container className="message container">
            <h1> No Followers Yet</h1>
          </Container>
        )}
        <footer></footer>
      </Container>
    );
  }
}

export default App;
