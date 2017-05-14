angular.module("fanMovieWeb")
    .controller('RegisterController', function ($scope, $state, $mdDialog, registerService) {

        $scope.title = "Cadastro";
        $scope.user = {};

        $scope.login = function login() {
            $state.go("login");
        };

        $scope.register = function register() {
            $scope.user.administrator = true;
            registerService.save($scope.user).then(onSuccess, onFailure);
        };

        function onSuccess(data) {
            showAlert("Usuário cadastrado", "Usuário cadastrado com sucesso")
            $state.go("login");
        }

        function onFailure(data, status) {
            if(!data.data)
                showAlert("Erro no servidor", "Servidor não encontrado");
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