import * as React from "react";
import { shallow } from "enzyme";

import InfoBar from "./InfoBar";

it("renders movie counter", () => {
    const result = shallow(<InfoBar />).contains(<p className="movie-counter">7 movies found</p>);
    expect(result).toBeTruthy();
});

it("renders sort movie div", () => {
    const result = shallow(<InfoBar />).contains(
    <div className="sort-movie">
        <p>sort by:</p>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-secondary btn-sm active">
            <input type="radio" name="options" id="option2" autoComplete="off" /> Title
        </label>
        <label className="btn btn-secondary btn-sm">
            <input type="radio" name="options" id="option2" autoComplete="off" /> Genre
        </label>
        </div>
    </div>);
    expect(result).toBeTruthy();
});