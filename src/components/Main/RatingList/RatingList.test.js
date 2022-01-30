import React from "react";
import { shallow } from "enzyme";
import RatingList from "./RatingList";

describe("RatingList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RatingList />);
    expect(wrapper).toMatchSnapshot();
  });
});
