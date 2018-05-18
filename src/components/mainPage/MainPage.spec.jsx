import * as React from "react";
import { shallow } from "enzyme";

import MainPage from "./MainPage";

import Movies from './movies/Movies';
import Search from './search/Search';
import InfoBar from './infoBar/InfoBar';
import MovieDetails from './movieDetails/MovieDetails';

it("renders the heading", () => {
    const result = shallow(<MainPage />).contains(<Search />);
    expect(result).toBeTruthy();
});

it("renders the heading", () => {
    const result = shallow(<MainPage />).contains(<InfoBar />);
    expect(result).toBeTruthy();
});

it("renders the heading", () => {
    const result = shallow(<MainPage />).contains(<Movies />);
    expect(result).toBeTruthy();
});