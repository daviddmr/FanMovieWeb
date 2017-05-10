/**
 * Created by david on 09/05/2017.
 */
angular.module("fanMovieWeb")
    .controller('RegisterMovieController', function ($scope, $state, registerMovieService, movieListService) {

        $scope.title = "Cadastrar filme";
        $scope.genres_selected = [];
        $scope.currentGenre = {};

        $scope.genres = [
            {"id": 28, genreName: 'Ação'},
            {"id": 12, genreName: 'Aventura'},
            {"id": 16, genreName: 'Animação'},
            {"id": 35, genreName: 'Comédia'},
            {"id": 80, genreName: 'Crime'},
            {"id": 99, genreName: 'Documentário'},
            {"id": 18, genreName: 'Drama'},
            {"id": 10751, genreName: 'Família'},
            {"id": 14, genreName: 'Fantasia'},
            {"id": 36, genreName: 'História'},
            {"id": 27, genreName: 'Terror'},
            {"id": 10402, genreName: 'Música'},
            {"id": 9648, genreName: 'Mistério'},
            {"id": 10749, genreName: 'Romance'},
            {"id": 878, genreName: 'Ficção científica'},
            {"id": 10770, genreName: 'Cinema TV'},
            {"id": 53, genreName: 'Thriller'},
            {"id": 10752, genreName: 'Guerra'},
            {"id": 37, genreName: 'Faroeste'}];

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