import React from "react";
import { render, cleanup, mockUserData } from "utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import UserInfo from "../UserInfo";

describe("<UserInfo/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<UserInfo userData={mockUserData} />);
    expect(component).toMatchSnapshot();
  });

  it("has a Container with children", () => {
    const { queryByTestId } = render(<UserInfo userData={mockUserData} />);
    const container = queryByTestId("user-info-container");
    expect(container).toBeTruthy();
    expect(container).toContainElement(queryByTestId("user-info-avatar"));
    expect(container).toContainElement(queryByTestId("user-info-metadata"));
  });

  it("has an avatar <Image/>", () => {
    const { queryByTestId } = render(<UserInfo userData={mockUserData} />);
    const avatar = queryByTestId("user-info-avatar");
    expect(avatar).toBeTruthy();

    expect(avatar).toHaveAttribute("src");
    expect(avatar.src).toBe(mockUserData.avatar_url);

    expect(avatar).toHaveAttribute("alt");
    expect(avatar.alt).toBe(`${mockUserData.login} user avatar`);
  });

  it("has <MetaData/>", () => {
    const { queryByTestId } = render(<UserInfo userData={mockUserData} />);
    const metaData = queryByTestId("user-info-metadata");
    expect(metaData).toBeTruthy();
  });
});
