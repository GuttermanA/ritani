import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import List from "../List";

describe("<List/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<List />);
    expect(component).toMatchSnapshot();
  });
});
