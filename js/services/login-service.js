angular.module('fanMovieWeb')
  .service('loginService', function (createService, $base64) {

    this.login = function login(user) {
      var auth = $base64.encode("a:a"),
        headers = {"Authorization": "Basic " + auth};
      return createService.httpPostAuthenticate("/user/login", {headers: headers});
    }
  });
