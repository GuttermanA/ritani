import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Image from "../Image";

describe("<Image/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<Image />);
    expect(component).toMatchSnapshot();
  });
});
