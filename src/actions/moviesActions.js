import * as types from './action-types';
import moviesApi from '../api/moviesApi';

export function loadMovies() {  
    return function(dispatch) {
      return moviesApi.getAllMovies().then(movies => {
        dispatch(loadMoviesSuccess(movies));
      }).catch(error => {
        throw(error);
      });
    };
  }

export const loadMoviesSuccess = movies => (
    { type: types.GET_MOVIES_SUCCESS, movies }
);

export const sortByTitleAction = () => (
  { type: types.SORT_BY_NAME }
);

export const sortByGenreAction = () => (
  { type: types.SORT_BY_GENRE }
);

export const searchByNameAction = (searchQuery) => (
  { type: types.SEARCH_BY_NAME, searchQuery }
);