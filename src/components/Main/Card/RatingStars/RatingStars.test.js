import React from "react";
import { shallow } from "enzyme";
import RatingStars from "./RatingStars";

describe("RatingStars", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RatingStars />);
    expect(wrapper).toMatchSnapshot();
  });
});
