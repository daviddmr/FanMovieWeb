angular.module("fanMovieWeb")
    .controller('LoginController', function ($scope, $rootScope, $state, $mdDialog, loginService, $window) {

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
            $state.go("movie-list");
        }

        function onFailure(data, status) {
            if(!data.data)
                showAlert("Erro no servidor", "Servidor não encontrado");
            if (data.status == 401)
                showAlert("", "Usuário ou senha inválido");
        }

        var showAlert = function (title, msg) {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title(title)
                    .textContent(msg)
                    .ok('Ok')
            );
        };
    });