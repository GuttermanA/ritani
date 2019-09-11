import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LoadFollowersButton from "../LoadFollowersButton";

describe("<LoadFollowersButton/>", () => {
  afterAll(cleanup);
  it("renders correctly", () => {
    const component = render(<LoadFollowersButton />);
    expect(component).toMatchSnapshot();
    expect(component.queryByTestId("load-followers-button")).toBeTruthy();
  });

  it("is disabled when passed a disabled prop", () => {
    const { queryByTestId, queryByText } = render(
      <LoadFollowersButton lastPage={true} />
    );
    expect(queryByTestId("load-followers-button")).toBeDisabled();
    expect(queryByText("End of Followers")).toBeTruthy();
  });

  it("calls #loadMoreFollowers onClick", () => {
    const loadMoreFollowers = jest.fn(() => Promise.resolve);
    const { queryByTestId, queryByText } = render(
      <LoadFollowersButton
        lastPage={false}
        loadMoreFollowers={loadMoreFollowers}
      />
    );

    expect(queryByText("Load")).toBeTruthy();
    expect(queryByTestId("load-followers-button")).toBeEnabled();
    fireEvent.click(queryByTestId("load-followers-button"));
    expect(loadMoreFollowers).toHaveBeenCalledTimes(1);
  });
});
