import React from "react";
import renderer from "react-test-renderer";
import Form from "../Form";

describe("<Form/>", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <Form>
        <Form.Field />
        <Form.Button />
      </Form>
    );
    expect(component).toMatchSnapshot();
  });
});
