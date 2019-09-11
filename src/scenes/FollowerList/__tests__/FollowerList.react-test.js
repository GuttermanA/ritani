import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FollowerList from "../FollowerList";

const mockFollowers = [
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

describe("<FollowerList/>", () => {
  test("renders correctly", () => {
    const component = render(<FollowerList />);
    expect(component).toMatchSnapshot();
  });

  test("renders followers passed as a prop", () => {
    const { queryAllByTestId } = render(
      <FollowerList followerData={mockFollowers} />
    );

    expect(queryAllByTestId("mouse-over-avatar-member").length).toBe(2);
  });
});
