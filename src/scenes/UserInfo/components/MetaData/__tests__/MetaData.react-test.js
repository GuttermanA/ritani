import React from "react";
import { render, cleanup, mockUserData } from "utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import MetaData from "../MetaData";

describe("<MetaData/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(<MetaData userData={mockUserData} />);
    expect(component).toMatchSnapshot();
  });

  it("it is a list with login, follower count, and blog items", () => {
    const { queryByTestId } = render(<MetaData userData={mockUserData} />);
    const list = queryByTestId("meta-list");
    expect(list).toBeTruthy();
    expect(list).toContainElement(queryByTestId("meta-list-login"));
    expect(list).toContainElement(queryByTestId("meta-list-followers"));
    expect(list).toContainElement(queryByTestId("meta-list-blog"));
  });

  describe("Login <List.Item/>", () => {
    it("renders correctly", () => {
      const { queryByTestId } = render(<MetaData userData={mockUserData} />);
      const listItem = queryByTestId("meta-list-login");
      expect(listItem).toHaveAttribute("style");
      expect(listItem.style._values).toMatchObject({ "font-weight": "bold" });
    });

    it("has a link", () => {
      const { queryByTestId } = render(<MetaData userData={mockUserData} />);
      const listItem = queryByTestId("meta-list-login");
      const link = queryByTestId("login-link");
      expect(listItem).toContainElement(link);
      expect(link).toHaveAttribute("href");
      expect(link.href).toBe(mockUserData.html_url);
      expect(link).toHaveAttribute("target");
      expect(link.target).toBe("_blank");
      expect(link).toHaveAttribute("rel");
      expect(link.rel).toBe("noopener noreferrer");
      expect(link).toHaveTextContent(mockUserData.login);
    });
  });

  describe("Followers <List.Item/>", () => {
    it("renders correctly", () => {
      const { queryByTestId } = render(<MetaData userData={mockUserData} />);
      const listItem = queryByTestId("meta-list-followers");
      expect(listItem).toHaveTextContent(
        `Followers - ${mockUserData.followers}`
      );
    });
  });

  describe("Blog <List.Item/>", () => {
    it("renders correctly", () => {
      const { queryByTestId } = render(<MetaData userData={mockUserData} />);
      const listItem = queryByTestId("meta-list-followers");
      expect(listItem).toHaveTextContent(
        `Followers - ${mockUserData.followers}`
      );
    });

    it("has a link", () => {
      const { queryByTestId } = render(<MetaData userData={mockUserData} />);
      const listItem = queryByTestId("meta-list-blog");
      const link = queryByTestId("blog-link");
      expect(listItem).toContainElement(link);

      expect(link).toHaveAttribute("href");
      expect(link.href).toBe(mockUserData.blog);

      expect(link).toHaveAttribute("target");
      expect(link.target).toBe("_blank");

      expect(link).toHaveAttribute("rel");
      expect(link.rel).toBe("noopener noreferrer");

      expect(link).toHaveTextContent(mockUserData.blog);
    });
  });
});
