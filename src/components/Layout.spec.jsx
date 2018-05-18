import * as React from "react";
import { shallow } from "enzyme";

import Layout from "./Layout";
import Header from "./header/Header";
import MainPage from './mainPage/MainPage';

it("renders the heading", () => {
    const result = shallow(<Layout />).contains(<Header />);
    expect(result).toBeTruthy();
});

it("renders the heading", () => {
    const result = shallow(<Layout />).contains(<MainPage />);
    expect(result).toBeTruthy();
});