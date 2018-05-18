import * as React from "react";
import { shallow } from "enzyme";
import {create as render } from 'react-test-renderer';

import Movies from "./Movies";
import MovieList from './movieList/MovieList';


it("renders movie list", () => {
    const result = render(<Movies />);
    const snap = result.toJSON();

    expect(snap).toMatchSnapshot();
});
