/**
 * Created by david.melo on 08/05/2017.
 */
angular.module("fanMovieWeb")
    .controller('MovieListController', function ($scope, $mdDialog, movieListService) {
        $scope.title = "Lista de filmes";

        $scope.movies = [];

        $scope.orderByFunction = function (field) {
            $scope.orderCriteria = field;
            $scope.orderDirection = !$scope.orderDirection;
        };

        $scope.orderByFunctionInit = function (field) {
            $scope.orderCriteria = field;
            $scope.orderDirection = false;
        };

        var getMovies = function getMovies() {
            movieListService.getMovies().then(onSuccess, onFailure);
        };

        function onSuccess(data) {
            $scope.movies = data.data;
        }

        function onFailure(data, status) {
            $scope.message = 'Aconteceu um problema: ' + status;
        }

        $scope.deleteMovie = function (movie) {
            movieListService.removeMovie(movie).then(onSuccessRemoveMovie, onFailureRemoveMovie);
        };

        function onSuccessRemoveMovie(data) {
            getMovies();
            showAlert('Filme \"' + data.data.title + '\" removido');
        }

        function onFailureRemoveMovie(data, status) {
            $scope.message = 'Aconteceu um problema: ' + status;
        }

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

        getMovies();
    });