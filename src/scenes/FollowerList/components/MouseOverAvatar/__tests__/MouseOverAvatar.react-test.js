import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
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
    const { getByTestId, getByText } = render(
      <MouseOverAvatar src="example@example.com" alt="Follower Avatar" />
    );
    const image = getByTestId("follower-avatar");
    expect(image).toBeTruthy();
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("alt");
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

  it("mouse over button calls #fetchUserWithFollowers onClick", () => {
    const fetchUserWithFollowers = jest.fn(() => Promise.resolve);
    const component = render(
      <MouseOverAvatar fetchUserWithFollowers={fetchUserWithFollowers} />
    );

    const container = component.getByTestId("avatar-container");

    fireEvent.mouseEnter(container);
    expect(component.getByTestId("follower-button")).toBeTruthy();
    fireEvent.click(component.queryByTestId("follower-button"));
    expect(fetchUserWithFollowers).toHaveBeenCalledTimes(1);
  });
});
