import React from "react";
import renderer from "react-test-renderer";
import Container from "../Container";

describe("<Container/>", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Container />);
    expect(component).toMatchSnapshot();
  });
});
