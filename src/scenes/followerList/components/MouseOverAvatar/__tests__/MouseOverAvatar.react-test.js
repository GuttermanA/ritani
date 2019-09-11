import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import MouseOverAvatar from "../MouseOverAvatar";

describe("<MouseOverAvatar/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<MouseOverAvatar />);
    expect(component).toMatchSnapshot();
  });

  it("renders a Container component", () => {
    const { getByTestId } = render(<MouseOverAvatar />);
    expect(getByTestId("avatar-container")).toBeTruthy();
  });

  it("renders an Image component", () => {
    const { getByTestId } = render(<MouseOverAvatar alt="Its a follower" />);
    expect(getByTestId("follower-avatar")).toBeTruthy();
  });

  it("renders a button when hovered", () => {
    let component = render(<MouseOverAvatar />);
    let container = component.getByTestId("avatar-container");
    expect(component).toMatchSnapshot();
    expect(component.queryByTestId("follower-button")).toBeNull();

    fireEvent.mouseEnter(container);
    expect(component).toMatchSnapshot();
    expect(component.getByTestId("follower-button")).toBeTruthy();

    fireEvent.mouseLeave(container);
    expect(component).toMatchSnapshot();
    expect(component.queryByTestId("follower-button")).toBeNull();
  });
});
