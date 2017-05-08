angular.module("fanMovieWeb")
    .controller('RegisterController', function ($scope, $state, registerService) {

        $scope.title = "Cadastro";
        $scope.error = false;
        $scope.user = {};

        var user = {};
        user = $scope.user;

        $scope.login = function login() {
            $state.go("login");
        };

        $scope.register = function register() {
            console.log(user);
            registerService.save(user).then(onSuccess, onFailure);
        };

        function onSuccess(data) {
            $scope.error = false;
            $state.go("login");
        }

        function onFailure(data, status) {
            $scope.error = true;
            $scope.message = 'Aconteceu um problema: ' + data;
        }
    });