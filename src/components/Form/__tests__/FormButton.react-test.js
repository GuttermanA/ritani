import React from "react";
import { cleanup, render } from "utils/test-utils";
import FormButton from "../FormButton";

describe("<FormButton/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<FormButton>Search</FormButton>);
    expect(component).toMatchSnapshot();
  });

  it("is disabled when passed a true disabled prop", () => {
    const button = {
      disabled: true
    };

    expect(button).toMatchSnapshot({
      disabled: true
    });
  });
});
