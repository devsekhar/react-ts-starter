import { shallow } from "enzyme";
import * as React from "react";

import App from "./App";

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders welcome message", () => {
  const wrapper = shallow(<App />);
  const welcome = "Welcome to React Typescript Starter";
  expect(wrapper.find("h1").text()).toContain(welcome);
});
