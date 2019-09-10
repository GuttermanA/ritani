import React from "react";
import { cleanup, render } from "utils/test-utils";
import Container from "../Container";

describe("<Container/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<Container />);
    expect(component).toMatchSnapshot();
  });
});
