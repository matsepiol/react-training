import * as React from "react";
import { shallow } from "enzyme";
import {create as render } from 'react-test-renderer';

import MovieList from './MovieList';


it("renders correctly", () => {
    const result = render(<MovieList />);
    const snap = result.toJSON();

    expect(snap).toMatchSnapshot();
});
