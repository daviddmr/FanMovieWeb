angular.module("fanMovieWeb")
    .controller('RegisterController', function ($scope, $state, $mdDialog, registerService) {

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
            showAlert("Usuário cadastrado", "Usuário cadastrado com sucesso")
            $state.go("login");
        }

        function onFailure(data, status) {
            if(data.status == 500)
                showAlert("Usuário cadastrado", "Este usuário já está cadastrado")
        }

        var showAlert = function(title, msg) {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title(title)
                    .textContent(msg)
                    .ok('Ok')
            );
        };
    });