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
        case types.SORT_BY_NAME:
            return { movies: state.movies.sort((a, b) => a.title.localeCompare(b.title)) };
        case types.SORT_BY_GENRE:
            return { movies: state.movies.sort((a, b) => b.genres[0].localeCompare(a.genres[0])) };
        case types.SEARCH_BY_NAME:
            return { movies: state.movies.filter((movie) => movie.title.toLowerCase().includes(action.searchQuery.toLowerCase())) };
        default:
            return state;
    }
}