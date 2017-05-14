angular.module('fanMovieWeb')
    .service('registerService', function (createService) {
        this.save = function save(user) {
            return createService.httpPostSignup('/user/signup', user);
        }
    });
