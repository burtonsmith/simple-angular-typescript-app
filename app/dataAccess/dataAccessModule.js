var app;
(function (app) {
    var dataAccess;
    (function (dataAccess) {
        'use strict';
        // Create the module and define its dependencies.
        angular.module('dataAccess', [
            // Angular modules
            'ngResource'
        ]);
    })(dataAccess = app.dataAccess || (app.dataAccess = {}));
})(app || (app = {}));
//# sourceMappingURL=dataAccessModule.js.map