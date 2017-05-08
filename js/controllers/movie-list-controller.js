/**
 * Created by david.melo on 08/05/2017.
 */
angular.module("fanMovieWeb")
    .controller('MovieListController', function ($scope, movieListService) {
        $scope.title = "Lista de filmes";

        $scope.movies = [];

        var getMovies = function getMovies() {
            movieListService.getMovies().then(onSuccess, onFailure);
        };

        function onSuccess(data) {
            $scope.error = false;
            $scope.movies = data.data;
        }

        function onFailure(data, status) {
            $scope.error = true;
            $scope.message = 'Aconteceu um problema: ' + status;
        }

        getMovies();
    });