export default class MoviesApi {
    static getAllMovies() {
        return fetch('http://react-cdp-api.herokuapp.com/movies').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}