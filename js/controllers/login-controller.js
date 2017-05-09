angular.module("fanMovieWeb")
    .controller('LoginController', function ($scope, $rootScope, $state, loginService, $window) {

        $scope.title = "Login";
        $scope.error = false;

        $scope.user = {};

        var user = {};
        user = $scope.user;

        $scope.login = function login() {
            $window.localStorage.setItem("login", JSON.stringify($scope.user));
            loginService.login(user).then(onSuccess, onFailure);
        };

        $scope.register = function register() {
            $state.go("register");
        };

        function onSuccess(data) {
            $scope.error = false;
            $rootScope.authenticated = true;
            $state.go("movie-list");
            console.log("Success")
        }

        function onFailure(data, status) {
            $scope.error = true;
            $rootScope.authenticated = false;
            $scope.message = 'Aconteceu um problema: ' + status;
        }

    });