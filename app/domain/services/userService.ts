module app.domain.services {
	'use strict';

	interface IUserService {
		getAll(): ng.resource.IResourceArray<dataAccess.IDataResource<entities.IUser>>;
		getByLogin(userLogin: string): dataAccess.IDataResource<entities.IUser>;
	}

	export class UserService implements IUserService {
		static $inject: string[] = ['dataAccessService'];
		constructor(private dataAccessService: dataAccess.DataAccessService<entities.IUser>) {
			
		}

		getAll(): ng.resource.IResourceArray<dataAccess.IDataResource<entities.IUser>> {
			var userResource = this.dataAccessService.getDataResource('https://api.github.com/users');
			return userResource.query((data: entities.IUser[]): entities.IUser[] => {
				return data;
			});
		}
		
		getByLogin(userLogin: string): dataAccess.IDataResource<entities.IUser> {
			var userResource = this.dataAccessService.getDataResource('https://api.github.com/users/:userLogin');
			return userResource.get({ userLogin : userLogin }, (data: entities.IUser): entities.IUser => {
				return data;
			});

		}
	}

	angular
		.module('domain')
		.service('userService',
					UserService);

}
