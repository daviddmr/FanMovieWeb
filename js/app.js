angular.module("fanMovieWeb", ["ui.router", "tiny-leaflet-directive", "base64"])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
      $stateProvider
          .state("login", {
              url: "/login",
              templateUrl: "views/login.html",
              controller: "LoginController"
          })
          .state("register", {
              url: "/register",
              templateUrl: "views/register.html",
              controller: "RegisterController"
          });

      // $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

      $httpProvider.defaults.headers.common['Authorization'] = 'Basic ' + "YTph";

      $urlRouterProvider.otherwise("/login");

    });