/**
 * Created by david.melo on 08/05/2017.
 */
angular.module('fanMovieWeb')
    .service('movieListService', function (createService) {
        this.getMovies = function getMovies() {
            return createService.httpGet("/movie/list");
        }
    });