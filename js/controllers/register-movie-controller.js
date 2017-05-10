/**
 * Created by david on 09/05/2017.
 */
angular.module("fanMovieWeb")
    .controller('RegisterMovieController', function ($scope, $state, registerMovieService, movieListService) {

        $scope.title = "Cadastrar filme";
        $scope.genres_selected = [];

        $scope.genres = ('Ação Aventura Animação Comédia Crime Documentário Drama Família Fantasia História ' +
        'Terror Música Mistério Romance Ficção científica Cinema TV Thriller Guerra Faroeste')
            .split(' ').map(function (genre) {
                return {abbrev: genre};
            });

        $scope.goToListOfMovie = function () {
            $state.go("movie-list");
        };

        $scope.logout = function () {
            movieListService.logout();
            $state.go("login");
        };

        $scope.addGenre = function (genre) {
            $scope.genres_selected.push(genre)
        }

    });