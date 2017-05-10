/**
 * Created by david.melo on 08/05/2017.
 */
angular.module('fanMovieWeb')
    .service('movieListService', function (createService) {
        this.getMovies = function getMovies() {
            return createService.httpGet("/movie/list");
        };

        this.removeMovie = function removeMovie(movie) {
            var params = {"id": movie._id};
            return createService.httpGet("/movie/remove", params)
        };

        this.logout = function logout() {
          return createService.httpGet("/user/logout");
        };
    });