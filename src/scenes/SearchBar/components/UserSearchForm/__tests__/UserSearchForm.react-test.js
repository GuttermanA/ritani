import React from "react";
import { render, cleanup, fireEvent, ReactTestUtils } from "utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import UserSearchForm from "../UserSearchForm";

describe("<UserSearchForm/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<UserSearchForm />);
    expect(component).toMatchSnapshot();
    expect(component.queryByTestId("search-form")).toBeTruthy();
    expect(component.queryByTestId("search-label")).toBeTruthy();
    expect(component.queryByTestId("search-field")).toBeTruthy();
    expect(component.queryByTestId("search-button")).toBeTruthy();
  });

  describe("<Form.Button/>", () => {
    //Silicences console error that submit is not implement due to limitation of testing framework
    let emit;
    beforeAll(() => {
      ({ emit } = window._virtualConsole);
    });
    beforeEach(() => {
      window._virtualConsole.emit = jest.fn();
    });
    afterAll(() => {
      window._virtualConsole.emit = emit;
    });
    afterEach(cleanup);

    it("renders correctly", () => {
      const { queryByTestId } = render(<UserSearchForm />);
      const button = queryByTestId("search-button");
      expect(button).toBeTruthy();
      expect(button).toHaveTextContent("Search");
      expect(button.className).toBe("form button");
    });

    it(`calls handleSubmit prop`, () => {
      const handleSubmit = jest.fn(() => Promise.resolve);
      const { queryByTestId } = render(
        <UserSearchForm handleSubmit={handleSubmit} />
      );
      const button = queryByTestId("search-button");
      fireEvent.click(button);
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe("<Form.Field/>", () => {
    afterEach(cleanup);

    it("renders correctly", () => {
      const component = render(<UserSearchForm />);
      const { queryByTestId, queryByPlaceholderText } = component;
      expect(component).toMatchSnapshot();
      const field = queryByTestId("search-field");
      expect(field).toBeTruthy();
      expect(field).toBeRequired();
      expect(queryByTestId("search-field")).toBeTruthy();
      expect(queryByPlaceholderText("Github Username")).toBeTruthy();
    });

    it(`calls handleChange on value change`, () => {
      const handleChange = jest.fn(() => {});
      const component = render(<UserSearchForm handleChange={handleChange} />);
      const field = component.queryByTestId("search-field");
      ReactTestUtils.Simulate.change(field);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("has the value passed to it by the value username prop", () => {
      const handleChange = jest.fn(() => {});
      const component = render(
        <UserSearchForm username="guttermana" handleChange={handleChange} />
      );
      const { queryByTestId } = component;
      expect(queryByTestId("search-field")).toHaveValue("guttermana");
      expect(queryByTestId("search-form")).toHaveFormValues({
        username: "guttermana"
      });

      expect(component).toMatchSnapshot();
    });

    it("has a label", () => {
      const { queryByTestId } = render(<UserSearchForm />);
      const label = queryByTestId("search-label");
      expect(label).toBeTruthy();
      expect(label).toHaveTextContent(
        "Enter Github Username to Retrieve Followers"
      );
      expect(label).toHaveAttribute("for");
    });
  });
});
