import React from "react";
import {
  render,
  rerender,
  cleanup,
  mockUserData,
  fireEvent,
  waitForElement,
  wait,
  ReactTestUtils
} from "utils/test-utils";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import { octokit } from "api";

describe("<App/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<App />);
    component.debug();
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
    // const container = document.createElement("div");
    // document.body.appendChild(container);
    // await act(async () => {
    //   ReactDOM.render(<App />, container);
    // });
    // console.log(container.toString());
    // const spy = jest
    //   .spyOn(octokit.users, "getByUsername")
    //   .mockImplementation(() => Promise.resolve(mockUserData));
    // const component = await render(<App />);
    // const { queryByTestId, debug } = component;
    // expect(queryByTestId("user-info-container")).toBeNull();
    // const button = queryByTestId("search-button");
    // const field = await findByPlaceholderText("Github Username");
    // debug();
  });

  it.skip("has conditionally a conditionally rendering <Error/> component", () => {});
});
