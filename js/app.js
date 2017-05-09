angular.module("fanMovieWeb", ["ui.router", "tiny-leaflet-directive", "ngMaterial", "ngMessages", "ngAnimate"])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $mdThemingProvider) {
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
          })
          .state("movie-list", {
              url: "/movie-list",
              templateUrl: "views/movie-list.html",
              controller: "MovieListController"
          });

        $urlRouterProvider.otherwise("/login");

        $httpProvider.interceptors.push('AuthInterceptor');

        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('grey');

    });