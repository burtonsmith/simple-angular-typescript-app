module app.dataAccess {
	export interface IDataAccessService<T> {
		getDataResource(uri: string): ng.resource.IResourceClass<IDataResource<T>>;
	}
	
	export interface IDataResource<T> extends ng.resource.IResource<T> {
		
	}
	
	export class DataAccessService<T> implements IDataAccessService<T> {

		static $inject = ['$resource'];		
		constructor(private $resource: ng.resource.IResourceService) {
			
		}
		
		getDataResource(uri: string): ng.resource.IResourceClass<IDataResource<T>> {
			return this.$resource(uri);
		}
	}
	
	angular
		.module('dataAccess')
		.service('dataAccessService',
					DataAccessService);
}