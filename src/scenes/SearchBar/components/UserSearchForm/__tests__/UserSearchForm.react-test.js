import React from "react";
import renderer from "react-test-renderer";
import UserSearchForm from "../UserSearchForm";

describe("<UserSearchForm/>", () => {
  it("renders correctly", () => {
    const component = renderer.create(<UserSearchForm />);
    expect(component).toMatchSnapshot();
  });

  it(`it has a "Search" button`, () => {});
});
