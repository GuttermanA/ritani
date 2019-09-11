import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MetaData from "../MetaData";

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

describe("<MetaData/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<MetaData userData={mockUserData} />);
    expect(component).toMatchSnapshot();
  });

  it("it is a list with login, follower count, and blog items", () => {
    const { queryByTestId } = render(<MetaData userData={mockUserData} />);
    const list = queryByTestId("meta-list");
    expect(list).toBeTruthy();
    expect(list).toContainElement(queryByTestId("meta-list-login"));
    expect(list).toContainElement(queryByTestId("meta-list-followers"));
    expect(list).toContainElement(queryByTestId("meta-list-blog"));
  });

  describe("Login <List.Item/>", () => {
    it("renders correctly", () => {
      const { queryByTestId } = render(<MetaData userData={mockUserData} />);
      const listItem = queryByTestId("meta-list-login");
      expect(listItem).toHaveAttribute("style");
      expect(listItem.style._values).toMatchObject({ "font-weight": "bold" });
    });

    it("has a link", () => {
      const { queryByTestId } = render(<MetaData userData={mockUserData} />);
      const listItem = queryByTestId("meta-list-login");
      const link = queryByTestId("login-link");
      expect(listItem).toContainElement(link);
      expect(link).toHaveAttribute("href");
      expect(link.href).toBe(mockUserData.html_url);
      expect(link).toHaveAttribute("target");
      expect(link.target).toBe("_blank");
      expect(link).toHaveAttribute("rel");
      expect(link.rel).toBe("noopener noreferrer");
      expect(link).toHaveTextContent(mockUserData.login);
    });
  });

  describe("Followers <List.Item/>", () => {
    it("renders correctly", () => {
      const { queryByTestId } = render(<MetaData userData={mockUserData} />);
      const listItem = queryByTestId("meta-list-followers");
      expect(listItem).toHaveTextContent(
        `Followers - ${mockUserData.followers}`
      );
    });
  });

  describe("Blog <List.Item/>", () => {
    it("renders correctly", () => {
      const { queryByTestId } = render(<MetaData userData={mockUserData} />);
      const listItem = queryByTestId("meta-list-followers");
      expect(listItem).toHaveTextContent(
        `Followers - ${mockUserData.followers}`
      );
    });

    it("has a link", () => {
      const { queryByTestId } = render(<MetaData userData={mockUserData} />);
      const listItem = queryByTestId("meta-list-blog");
      const link = queryByTestId("blog-link");
      expect(listItem).toContainElement(link);

      expect(link).toHaveAttribute("href");
      expect(link.href).toBe(mockUserData.blog);

      expect(link).toHaveAttribute("target");
      expect(link.target).toBe("_blank");

      expect(link).toHaveAttribute("rel");
      expect(link.rel).toBe("noopener noreferrer");

      expect(link).toHaveTextContent(mockUserData.blog);
    });
  });
});
