import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserInfo from "../UserInfo";

const mockUserData = {
  login: "octocat",
  id: 1,
  node_id: "MDQ6VXNlcjE=",
  avatar_url: "https://github.com/images/error/octocat_happy.gif",
  gravatar_id: "",
  url: "https://api.github.com/users/octocat",
  html_url: "https://github.com/octocat",
  followers_url: "https://api.github.com/users/octocat/followers",
  following_url: "https://api.github.com/users/octocat/following{/other_user}",
  gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
  starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
  organizations_url: "https://api.github.com/users/octocat/orgs",
  repos_url: "https://api.github.com/users/octocat/repos",
  events_url: "https://api.github.com/users/octocat/events{/privacy}",
  received_events_url: "https://api.github.com/users/octocat/received_events",
  type: "User",
  site_admin: false,
  name: "monalisa octocat",
  company: "GitHub",
  blog: "https://github.com/blog",
  location: "San Francisco",
  email: "octocat@github.com",
  hireable: false,
  bio: "There once was...",
  public_repos: 2,
  public_gists: 1,
  followers: 20,
  following: 0,
  created_at: "2008-01-14T04:33:35Z",
  updated_at: "2008-01-14T04:33:35Z"
};

describe("<UserInfo/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<UserInfo userData={mockUserData} />);
    expect(component).toMatchSnapshot();
  });

  it("has a Container with children", () => {
    const { queryByTestId } = render(<UserInfo userData={mockUserData} />);
    const container = queryByTestId("user-info-container");
    expect(container).toBeTruthy();
    expect(container).toContainElement(queryByTestId("user-info-avatar"));
    expect(container).toContainElement(queryByTestId("user-info-metadata"));
  });

  it("has an avatar <Image/>", () => {
    const { queryByTestId } = render(<UserInfo userData={mockUserData} />);
    const avatar = queryByTestId("user-info-avatar");
    expect(avatar).toBeTruthy();

    expect(avatar).toHaveAttribute("src");
    expect(avatar.src).toBe(mockUserData.avatar_url);

    expect(avatar).toHaveAttribute("alt");
    expect(avatar.alt).toBe(`${mockUserData.login} user avatar`);
  });

  it("has <MetaData/>", () => {
    const { queryByTestId } = render(<UserInfo userData={mockUserData} />);
    const metaData = queryByTestId("user-info-metadata");
    expect(metaData).toBeTruthy();
  });
});
