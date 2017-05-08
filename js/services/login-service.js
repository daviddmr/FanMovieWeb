angular.module('fanMovieWeb')
  .service('loginService', function (createService, $base64) {

    console.log($base64.encode("a:a"));

    this.login = function login(user) {
      var auth = $base64.encode("a:a"),
        headers = {"Authorization": "Basic " + auth};
      return createService.httpGetAuthenticate("/user/login", {headers: headers});
    }
  });
