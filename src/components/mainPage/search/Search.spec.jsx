import * as React from "react";
import { shallow } from "enzyme";

import Search from "./Search";


it("renders genre input", () => {
    const result = shallow(<Search />).contains( <input type="radio" name="options" id="option2" autoComplete="off" />);
    expect(result).toBeTruthy();
});

it("renders button", () => {
    const result = shallow(<Search />).contains(<button type="button" className="btn btn-danger btn-sm search-button">Search</button>);
    expect(result).toBeTruthy();
});