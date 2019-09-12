import React from "react";
import { render, cleanup, mockAppState, TestRenderer } from "utils/test-utils";

import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import { octokit } from "api";

describe("<App/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });

  describe("default state", () => {
    it("has a sticky <div> with <SearchBar/>", () => {
      const { queryByTestId } = render(<App />);
      const stickyDiv = queryByTestId("sticky-div");
      expect(stickyDiv).toBeTruthy();
      expect(stickyDiv).toContainElement(queryByTestId("search-bar-container"));
    });

    it("has a message container with text", () => {
      const { queryByText } = render(<App />);
      expect(queryByText("No Followers Yet")).toBeTruthy();
    });
  });

  /* In below functions I wanted to implented testing of conditiaonal rendering based on state
   */

  it.skip("has conditionally a conditionally rendering <UserInfo/> component", async () => {
    // const spy = jest
    //   .spyOn(octokit.users, "getByUsername")
    //   .mockImplementation(() => Promise.resolve(mockUserData));
    // const component = await render(<App mockAppState={mockAppState} />);
    // const { queryByTestId, debug } = component;
    // debug();
  });

  it.skip("has conditionally a conditionally rendering <Error/> component", async () => {});
});
