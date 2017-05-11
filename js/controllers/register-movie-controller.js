/**
 * Created by david on 09/05/2017.
 */
angular.module("fanMovieWeb")
    .controller('RegisterMovieController', function ($scope, $state, registerMovieService, movieListService) {

        $scope.title = "Cadastrar filme";

        $scope.selectedGenres = [];

        $scope.transformChip = function transformChip(chip) {
            if (angular.isObject(chip)) {
                return chip;
            }
        };

        $scope.querySearch = function querySearch (query) {
            var results = query ? genres.filter(createFilterFor(query)) : [];
            return results;
        };

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(genre) {
                return (genre.genreName.indexOf(lowercaseQuery) >= 0);
            };
        }

        var genres = [
            {"id": 28,      genreName: 'ação'},
            {"id": 12,      genreName: 'aventura'},
            {"id": 16,      genreName: 'animação'},
            {"id": 35,      genreName: 'comédia'},
            {"id": 80,      genreName: 'crime'},
            {"id": 99,      genreName: 'documentário'},
            {"id": 18,      genreName: 'drama'},
            {"id": 10751,   genreName: 'família'},
            {"id": 14,      genreName: 'fantasia'},
            {"id": 36,      genreName: 'história'},
            {"id": 27,      genreName: 'terror'},
            {"id": 10402,   genreName: 'música'},
            {"id": 9648,    genreName: 'mistério'},
            {"id": 10749,   genreName: 'romance'},
            {"id": 878,     genreName: 'ficção científica'},
            {"id": 10770,   genreName: 'cinema TV'},
            {"id": 53,      genreName: 'thriller'},
            {"id": 10752,   genreName: 'guerra'},
            {"id": 37,      genreName: 'faroeste'}];

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