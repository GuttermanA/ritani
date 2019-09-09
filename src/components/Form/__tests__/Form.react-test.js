import React from "react";
import { cleanup, render } from "utils/test-utils";
import Form from "../Form";

describe("<Form/>", () => {
  afterEach(cleanup);
  it("renders correctly", () => {
    const component = render(
      <Form>
        <Form.Field />
        <Form.Button />
      </Form>
    );
    expect(component).toMatchSnapshot();
  });
});
