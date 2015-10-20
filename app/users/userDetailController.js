var app;
(function (app) {
    var users;
    (function (users) {
        'use strict';
        var UserDetailController = (function () {
            function UserDetailController($routeParams, userService) {
                this.$routeParams = $routeParams;
                this.title = 'User Details';
                this.user = userService.getByLogin($routeParams.userLogin);
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