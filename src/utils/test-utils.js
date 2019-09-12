export const mockUserData = {
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

export const mockFollowers = [
  {
    login: "Vkopensource",
    id: 48538853,
    node_id: "MDQ6VXNlcjQ4NTM4ODUz",
    avatar_url: "https://avatars2.githubusercontent.com/u/48538853?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/Vkopensource",
    html_url: "https://github.com/Vkopensource",
    followers_url: "https://api.github.com/users/Vkopensource/followers",
    following_url:
      "https://api.github.com/users/Vkopensource/following{/other_user}",
    gists_url: "https://api.github.com/users/Vkopensource/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/Vkopensource/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/Vkopensource/subscriptions",
    organizations_url: "https://api.github.com/users/Vkopensource/orgs",
    repos_url: "https://api.github.com/users/Vkopensource/repos",
    events_url: "https://api.github.com/users/Vkopensource/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/Vkopensource/received_events",
    type: "User",
    site_admin: false
  },
  {
    login: "stvtortora",
    id: 32438308,
    node_id: "MDQ6VXNlcjMyNDM4MzA4",
    avatar_url: "https://avatars3.githubusercontent.com/u/32438308?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/stvtortora",
    html_url: "https://github.com/stvtortora",
    followers_url: "https://api.github.com/users/stvtortora/followers",
    following_url:
      "https://api.github.com/users/stvtortora/following{/other_user}",
    gists_url: "https://api.github.com/users/stvtortora/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/stvtortora/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/stvtortora/subscriptions",
    organizations_url: "https://api.github.com/users/stvtortora/orgs",
    repos_url: "https://api.github.com/users/stvtortora/repos",
    events_url: "https://api.github.com/users/stvtortora/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/stvtortora/received_events",
    type: "User",
    site_admin: false
  }
];

export * from "@testing-library/react";
export { default as ReactTestUtils } from "react-dom/test-utils";
