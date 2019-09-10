import React from "react";
import { cleanup, render } from "utils/test-utils";
import List from "../List";

describe("<List/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<List />);
    expect(component).toMatchSnapshot();
  });
});
