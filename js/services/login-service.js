angular.module('fanMovieWeb')
  .service('loginService', function (createService) {

    this.login = function login(user) {

      return createService.httpPost("/user/login", user);
    }
  });
