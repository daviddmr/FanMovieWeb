/**
 * Created by david on 07/05/2017.
 */
angular.module("fanMovieWeb", ["ui.router"])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

  });