var app;
(function (app) {
    'use strict';
    // Create the module and define its dependencies.
    var main = angular.module('app', [
        // Angular modules
        'ngRoute',
        // Custom modules
        'dataAccess',
        'domain',
    ]);
    main.config(routeConfig);
    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
        $routeProvider
            .when('/userList', {
            templateUrl: '/app/users/userListView.html',
            controller: "UserListController as vm"
        })
            .when('/userDetail/:userLogin', {
            templateUrl: '/app/users/userDetailView.html',
            controller: 'UserDetailController as vm'
        })
            .otherwise('/userList');
    }
    main.config(config);
    config.$inject = ['$locationProvider'];
    function config($locationProvider) {
        $locationProvider.html5Mode();
    }
})(app || (app = {}));
//# sourceMappingURL=app.js.map