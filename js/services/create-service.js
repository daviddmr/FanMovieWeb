angular.module('fanMovieWeb')
    .service('createService', function ($http, $window) {

        var baseUrl = 'http://localhost:8080';

        function getHeader() {
            var user = JSON.parse($window.localStorage.getItem("login"));
            if(user)
                var encodedString = btoa(user.username + ":" + user.password);
            return {'Authorization': 'Basic ' + encodedString};
        }

        this.httpGet = function httpGet(url, params) {
            var header = getHeader();
            return $http({
                url: baseUrl + url,
                method: "GET",
                headers: header,
                params: params
            });
        };

        this.httpPost = function httpPost(url, data, params) {
            var header = getHeader();
            return $http({
                url: baseUrl + url,
                method: "POST",
                data: data,
                headers: header,
                params: params
            });
        };

        this.httpPostSignup = function httpPost(url, data) {
            return $http({
                url: baseUrl + url,
                method: "POST",
                data: data
            });
        };

        this.httpDelete = function httpDelete(url) {
            return $http.delete(baseUrl + url);
        };

        this.httpPut = function httpPut(url, data) {
            return $http.put(baseUrl + url, data);
        }
    });