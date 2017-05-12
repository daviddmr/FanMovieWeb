/**
 * Created by david on 09/05/2017.
 */
angular.module('fanMovieWeb')
    .service('registerMovieService', function (createService) {

        this.addMovie = function addMovies(movie) {
            return createService.httpPost("/movie/add", movie);
        };

        this.updateMovie = function updateMovies() {
            // return createService.httpPost("/movie/add");
            return success;
        };
    });