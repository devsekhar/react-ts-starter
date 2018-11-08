import { shallow } from "enzyme";
import * as React from "react";

import App from "./App";

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders welcome message", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Welcome to React Typescript Starter</h1>;
  expect(wrapper.find("h1").contains(welcome)).toEqual(true);
});
