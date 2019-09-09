import React from "react";
import { cleanup, render } from "utils/test-utils";
import FormField from "../FormField";

describe("<FormField/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<FormField />);
    expect(component).toMatchSnapshot();
  });
});
