import { shallow } from "enzyme";
import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders welcome message", () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  // expect(wrapper).toContainReact(welcome)
  expect(wrapper.contains(welcome)).toEqual(true);
});
