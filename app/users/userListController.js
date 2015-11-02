var app;
(function (app) {
    var users;
    (function (users) {
        'use strict';
        var UserListController = (function () {
            function UserListController(userService, dataAccessService) {
                this.userService = userService;
                this.dataAccessService = dataAccessService;
                this.title = 'User List';
                this.activate();
                this.showImage = true;
            }
            UserListController.prototype.getUsers = function () {
                var _this = this;
                this.userService.getAll().$promise.then(function (data) {
                    _this.users = data;
                });
            };
            UserListController.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            UserListController.prototype.activate = function () {
                this.getUsers();
            };
            UserListController.$inject = ['userService', 'dataAccessService'];
            return UserListController;
        })();
        angular.module('app').controller('UserListController', UserListController);
    })(users = app.users || (app.users = {}));
})(app || (app = {}));
//# sourceMappingURL=userListController.js.map