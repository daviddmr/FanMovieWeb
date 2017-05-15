/**
 * Created by david.melo on 08/05/2017.
 */
angular.module("fanMovieWeb")
    .controller('MovieListController', function ($scope, $mdDialog, $state, movieListService) {
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
            if (data.status == 401) {
                sessionExpired();
            }
        }

        function sessionExpired() {
            showAlert("Sua sessão expirou");
            $state.go("login");
        }

        var deleteMovie = function (movie) {
            movieListService.removeMovie(movie).then(onSuccessRemoveMovie, onFailureRemoveMovie);
        };

        function onSuccessRemoveMovie(data) {
            getMovies();
            showAlert('Filme \"' + data.data.title + '\" removido');
        }

        function onFailureRemoveMovie(data, status) {
            if(data.status == 401)
                sessionExpired();
        }

        var showAlert = function (msg) {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .textContent(msg)
                    .ok('Ok!')
            );
        };

        $scope.showRemoveMovieConfirm = function (movie) {
            var confirm = $mdDialog.confirm()
                .title('Você realmente deseja remover este filme ?')
                .clickOutsideToClose(true)
                .ok('Sim')
                .cancel('Não');

            $mdDialog.show(confirm).then(function () {
                deleteMovie(movie)
            });
        };

        $scope.logout = function () {
            movieListService.logout();
            $state.go("login");
        };

        getMovies();

        $scope.openCreateEditMovieDialog = function (movie) {
            $mdDialog.show({
                controller: "RegisterMovieController",
                templateUrl: 'views/register-movie.html',
                locals: {
                    movie: movie
                },
                clickOutsideToClose: true,
                onRemoving: function () {
                    getMovies();
                }
            })
        };

    });