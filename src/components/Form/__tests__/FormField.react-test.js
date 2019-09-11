import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import FormField from "../FormField";

describe("<FormField/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<FormField />);
    expect(component).toMatchSnapshot();
  });
});
