module app {
	'use strict';

	// Create the module and define its dependencies.
	var main = angular.module('app', [
		// Angular modules
		'ngRoute', // routing

		// Custom modules
		'dataAccess',
		'domain',

		// 3rd Party Modules
	]);

	main.config(routeConfig);

	routeConfig.$inject = ['$routeProvider'];
	function routeConfig($routeProvider: ng.route.IRouteProvider): void {
		$routeProvider
			.when('/userList',
			{
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
	function config($locationProvider: ng.ILocationProvider) {
		$locationProvider.html5Mode();
	}
}
