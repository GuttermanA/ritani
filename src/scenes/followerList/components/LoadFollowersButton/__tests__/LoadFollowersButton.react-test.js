import React from "react";
import renderer from "react-test-renderer";
import LoadFollowersButton from "../LoadFollowersButton";

describe("<LoadFollowersButton/>", () => {
  it("renders correctly", () => {
    const component = renderer.create(<LoadFollowersButton />);
    expect(component).toMatchSnapshot();
  });
});
