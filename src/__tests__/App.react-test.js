import React from "react";
import {
  render,
  cleanup,
  mockUserData,
  mockFollowerData
} from "utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

const mockState = {
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

describe("<App/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<App />);
    component.state = mockState;
    console.log(component.queryByTestId("app"));
    expect(component).toMatchSnapshot();
  });

  it("has a sticky <div>", () => {
    const { queryByTestId } = render(<App userData />);
    const stickyDiv = queryByTestId("sticky-div");
    expect(stickyDiv).toBeTruthy();
    expect(stickyDiv).toContainElement(queryByTestId("search-bar-container"));
  });
});
