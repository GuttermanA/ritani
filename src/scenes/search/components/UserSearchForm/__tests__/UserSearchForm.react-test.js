import React from "react";
import { cleanup, render } from "utils/test-utils";
import UserSearchForm from "../UserSearchForm";

describe("<UserSearchForm/>", () => {
  it("renders correctly", () => {
    const component = render(<UserSearchForm />);
    expect(component).toMatchSnapshot();
  });
});
