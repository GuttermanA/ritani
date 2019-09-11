import React from "react";
import renderer from "react-test-renderer";
import LoadFollowersButton from "../LoadFollowersButton";

describe("<LoadFollowersButton/>", () => {
  it("renders correctly", () => {
    const component = renderer.create(<LoadFollowersButton />);
    expect(component).toMatchSnapshot();
  });

  it("is disabled when passed a disabled prop", () => {
    let component = render(<LoadFollowersButton disabled={true} />);
    expect(component).toMatchSnapshot();
    expect(component.queryByTestId("load-follower-button")).toBeTruthy();
  });
});
