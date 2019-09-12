import React from "react";
import { render, cleanup, mockFollowers } from "utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import FollowerList from "../FollowerList";

describe("<FollowerList/>", () => {
  afterEach(cleanup);
  test("renders correctly", () => {
    const component = render(<FollowerList />);
    expect(component).toMatchSnapshot();
  });

  test("renders followers passed as a prop", () => {
    const { queryAllByTestId } = render(
      <FollowerList followerData={mockFollowers} />
    );

    expect(queryAllByTestId("mouse-over-avatar-member").length).toBe(2);
  });
});
