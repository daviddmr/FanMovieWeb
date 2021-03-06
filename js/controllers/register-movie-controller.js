/**
 * Created by david on 09/05/2017.
 */
angular.module("fanMovieWeb")
    .controller('RegisterMovieController', function ($scope, $state, $filter, $mdDialog, registerMovieService, movieListService, movie) {

        $scope.genre_ids = [];

        $scope.transformChip = function transformChip(chip) {
            if (angular.isObject(chip)) {
                return chip;
            }
        };

        $scope.querySearch = function querySearch(query) {
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
            {"id": 28, genreName: 'ação'},
            {"id": 12, genreName: 'aventura'},
            {"id": 16, genreName: 'animação'},
            {"id": 35, genreName: 'comédia'},
            {"id": 80, genreName: 'crime'},
            {"id": 99, genreName: 'documentário'},
            {"id": 18, genreName: 'drama'},
            {"id": 10751, genreName: 'família'},
            {"id": 14, genreName: 'fantasia'},
            {"id": 36, genreName: 'história'},
            {"id": 27, genreName: 'terror'},
            {"id": 10402, genreName: 'música'},
            {"id": 9648, genreName: 'mistério'},
            {"id": 10749, genreName: 'romance'},
            {"id": 878, genreName: 'ficção científica'},
            {"id": 10770, genreName: 'cinema TV'},
            {"id": 53, genreName: 'thriller'},
            {"id": 10752, genreName: 'guerra'},
            {"id": 37, genreName: 'faroeste'}];

        function getGenreById(id) {
            return $filter('filter')(genres, {id: id}, true);
        }

        movie ? (movie.id ? fillMovieFields(movie) : clearMovieFields()) : clearMovieFields();

        function clearMovieFields() {
            $scope.title = "Cadastrar novo filme";
            $scope.movie = {};
            $scope.titleOfClearResetButton = "Limpar";
            $scope.titleOfSaveEditButton = "Salvar";
        }

        function fillMovieFields(movie) {
            $scope.title = "Editar filme";
            $scope.titleOfClearResetButton = "Reset";
            $scope.titleOfSaveEditButton = "Editar";
            movie.release_date = movie.release_date.substring(0,4);
            $scope.movie = angular.copy(movie);
            movie.genre_ids.forEach(function (id) {
                var genre = getGenreById(id);
                $scope.genre_ids.push(genre[0]);
            });
        }

        $scope.years = [];
        for (var i = 2017; i >= 1900; i--) {
            $scope.years.push(i);
        }

        $scope.goToListOfMovie = function () {
            $state.go("movie-list");
        };

        $scope.logout = function () {
            movieListService.logout();
            $state.go("login");
        };

        $scope.addMovie = function addMovie(movie) {
            movie.genre_ids = $scope.genre_ids.map(function (value) {
                return value.id;
            });

            registerMovieService.addMovie(movie).then(onSuccess, onFailure);
        };

        function onSuccess(data) {
            movie ? showAlert('Filme \"' + data.data.title + '\" editado com sucesso') : showAlert('Filme \"' + data.data.title + '\" salvo com sucesso');
            hideDialog();
        }

        function onFailure(data, status) {
            if (data.status == 401) {
                showAlert("Sua sessão expirou");
                $state.go("login");
            }
        }

        var hideDialog = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.clearForm = function(form) {
            if (movie) {
                $scope.movie = angular.copy(movie);
                $scope.genre_ids = [];
                movie.genre_ids.forEach(function (id) {
                    var genre = getGenreById(id);
                    $scope.genre_ids.push(genre[0]);
                });
            } else if(form) {
                $scope.movie = {};
                $scope.genre_ids = [];
                form.$setUntouched();
            }
        };

        var showAlert = function (msg) {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .textContent(msg)
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Ok!')
                // .targetEvent(ev)
            );
        };

    });