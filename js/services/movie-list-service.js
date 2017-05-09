/**
 * Created by david.melo on 08/05/2017.
 */
angular.module('fanMovieWeb')
    .service('movieListService', function (createService, $base64) {
        this.getMovies = function getMovies() {
            var auth = $base64.encode("a" + ":" + "a"),
                headers = {"Authorization": "Basic " + auth};
            return createService.httpGet("/movie/list", headers);
        }
    });