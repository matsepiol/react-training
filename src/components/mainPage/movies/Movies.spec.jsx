import * as React from "react";
import { shallow } from "enzyme";

import Movies from "./Movies";
import MovieList from './movieList/MovieList';


it("renders movie list", () => {
    const result = shallow(<Movies />).contains(<MovieList />);
    expect(result).toBeTruthy();
});
