import * as React from "react";
import { shallow } from "enzyme";
import Button from "../src/index";

describe("Button package tests", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Button compiler="TypeScript" framework="React" />);
    expect(wrapper).toMatchSnapshot();
  });
});
