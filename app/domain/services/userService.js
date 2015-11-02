var app;
(function (app) {
    var domain;
    (function (domain) {
        var services;
        (function (services) {
            'use strict';
            var UserService = (function () {
                function UserService(dataAccessService) {
                    this.dataAccessService = dataAccessService;
                }
                UserService.prototype.getAll = function () {
                    var userResource = this.dataAccessService.getDataResource('https://api.github.com/users');
                    return userResource.query(function (data) {
                        return data;
                    });
                };
                UserService.prototype.getByLogin = function (userLogin) {
                    var userResource = this.dataAccessService.getDataResource('https://api.github.com/users/:userLogin');
                    return userResource.get({ userLogin: userLogin }, function (data) {
                        return data;
                    });
                };
                UserService.$inject = ['dataAccessService'];
                return UserService;
            })();
            services.UserService = UserService;
            angular
                .module('domain')
                .service('userService', UserService);
        })(services = domain.services || (domain.services = {}));
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
//# sourceMappingURL=userService.js.map