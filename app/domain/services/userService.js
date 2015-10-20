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
                    var users;
                    var userResource = this.dataAccessService.getDataResource('https://api.github.com/users');
                    userResource.query(function (data) {
                        users = data;
                    });
                    return users;
                };
                UserService.prototype.getByLogin = function (userLogin) {
                    var user;
                    var userResource = this.dataAccessService.getDataResource('https://api.github.com/users/:userLogin');
                    userResource.get({ userLogin: userLogin }, function (data) {
                        user = data;
                    });
                    return user;
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