var app;
(function (app) {
    var users;
    (function (users) {
        'use strict';
        var UserListController = (function () {
            function UserListController(userService) {
                this.title = 'User List';
                this.activate();
                this.showImage = true;
                this.users = userService.getAll();
            }
            UserListController.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            UserListController.prototype.activate = function () {
            };
            UserListController.$inject = ['userService'];
            return UserListController;
        })();
        angular.module('app').controller('UserListController', UserListController);
    })(users = app.users || (app.users = {}));
})(app || (app = {}));
//# sourceMappingURL=userListController.js.map