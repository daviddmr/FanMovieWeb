/**
 * Created by david.melo on 08/05/2017.
 */
angular.module("fanMovieWeb")
    .controller('MovieListController', function ($scope, movieListService) {
        $scope.title = "Lista de filmes"

        $scope.movies = [];
    });