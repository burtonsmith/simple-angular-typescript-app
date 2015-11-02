module app.config {
	'use strict';
   
	// Create the module and define its dependencies.
	angular.module('app')
		.config(config);
	
	config.$inject = ['$locationProvider'];
	function config($locationProvider: ng.ILocationProvider) {
		$locationProvider.html5Mode(true);
	}
}