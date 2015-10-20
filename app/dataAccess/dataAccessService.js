var app;
(function (app) {
    var dataAccess;
    (function (dataAccess) {
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getDataResource = function (uri) {
                return this.$resource(uri);
            };
            DataAccessService.$inject = ['$resource'];
            return DataAccessService;
        })();
        dataAccess.DataAccessService = DataAccessService;
        angular
            .module('dataAccess')
            .service('dataAccessService', DataAccessService);
    })(dataAccess = app.dataAccess || (app.dataAccess = {}));
})(app || (app = {}));
//# sourceMappingURL=dataAccessService.js.map