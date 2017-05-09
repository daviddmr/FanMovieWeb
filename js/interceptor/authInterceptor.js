/**
 * Created by david.melo on 09/05/2017.
 */
angular.module('fanMovieWeb')
    .factory('AuthInterceptor', ['$window', function($window) {
        var user = $window.localStorage.getItem("login");
        return {
            'request': function(config) {
                config.headers = config.headers || {};
                var encodedString = btoa("a" + ":" + "a");
                config.headers.Authorization = 'Basic '+encodedString;
                return config;
            }
        };
    }]);