import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchBar from "../SearchBar";

describe("<SearchBar/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<SearchBar />);
    expect(component).toMatchSnapshot();
  });

  it("has the UserSearchForm", () => {
    const { queryByTestId } = render(<SearchBar />);
    expect(queryByTestId("search-form")).toBeTruthy();
  });

  it("has the a link to the Github repo", () => {
    const { queryByTestId } = render(<SearchBar />);
    const link = queryByTestId("github-repo-link");
    expect(link).toBeTruthy();
    expect(link).toHaveAttribute("href");
    expect(link.href).toBe("https://github.com/GuttermanA/ritani");
    expect(link).toHaveAttribute("target");
    expect(link.target).toBe("_blank");
    expect(link).toHaveAttribute("rel");
    expect(link.rel).toBe("noopener noreferrer");
    expect(link).toHaveTextContent("Github Repository");
  });
});
