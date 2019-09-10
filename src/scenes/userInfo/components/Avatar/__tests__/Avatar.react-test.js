import React from "react";
import { cleanup, render } from "utils/test-utils";
import Avatar from "../Avatar";

describe("<Avatar/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<Avatar />);
    expect(component).toMatchSnapshot();
  });
});
