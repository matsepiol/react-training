import * as types from '../actions/action-types';

const initialState = {
    movies: [
        {
            title: "Mock movie",
            genre: "unknown",
            year: 2002
        },
        {
            title: "Mock movie",
            genre: "unknown",
            year: 2002
        },
    ]
};

export default function MoviesReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_MOVIES_SUCCESS:
            return { movies: action.movies.data }
        default:
            return state;
    }
}