import React from "react";
import { cleanup, render } from "utils/test-utils";
import Image from "../Image";

describe("<Image/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<Image />);
    expect(component).toMatchSnapshot();
  });
});
