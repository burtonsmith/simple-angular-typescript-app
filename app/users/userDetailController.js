var app;
(function (app) {
    var users;
    (function (users) {
        'use strict';
        var UserDetailController = (function () {
            function UserDetailController($routeParams, userService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.title = 'User Details';
                userService.getByLogin($routeParams.userLogin).$promise.then(function (data) {
                    _this.user = data;
                });
                this.activate();
            }
            UserDetailController.prototype.activate = function () {
            };
            UserDetailController.$inject = ['$routeParams', 'userService'];
            return UserDetailController;
        })();
        angular
            .module('app')
            .controller('UserDetailController', UserDetailController);
    })(users = app.users || (app.users = {}));
})(app || (app = {}));
//# sourceMappingURL=userDetailController.js.map