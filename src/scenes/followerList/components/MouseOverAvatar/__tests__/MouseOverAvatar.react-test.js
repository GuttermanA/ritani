import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import MouseOverAvatar from "../MouseOverAvatar";

describe("<MouseOverAvatar/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<MouseOverAvatar />);
    expect(component).toMatchSnapshot();
  });

  it("renders a button when hovered", () => {
    let component = render(<MouseOverAvatar />);
    expect(component).toMatchSnapshot();

    let container = component.getByTestId("avatar-container");

    fireEvent.mouseEnter(container);
    component = render(<MouseOverAvatar />);
    expect(component.getByTestId("follower-button")).toBeTruthy();
    fireEvent.mouseLeave(container);
    component = render(<MouseOverAvatar />);
    expect(component.queryByTestId("follower-button")).toBeNull();
  });
});
