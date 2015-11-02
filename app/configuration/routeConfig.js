var app;
(function (app) {
    var config;
    (function (config_1) {
        'use strict';
        // Create the module and define its dependencies.
        angular.module('app')
            .config(config);
        config.$inject = ['$locationProvider'];
        function config($locationProvider) {
            $locationProvider.html5Mode(true);
        }
    })(config = app.config || (app.config = {}));
})(app || (app = {}));
//# sourceMappingURL=routeConfig.js.map