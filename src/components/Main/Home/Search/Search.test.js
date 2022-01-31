import React from "react";
import { shallow } from "enzyme";
import Search from "./Search.test";

describe("Buscador", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });
});
