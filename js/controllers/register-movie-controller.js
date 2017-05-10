/**
 * Created by david on 09/05/2017.
 */
angular.module("fanMovieWeb")
    .controller('RegisterMovieController', function ($scope, $state, registerMovieService, movieListService) {

        $scope.title = "Cadastrar filme";

        $scope.goToListOfMovie = function () {
            $state.go("movie-list");
        };

        $scope.logout = function () {
            movieListService.logout();
            $state.go("login");
        };

    });