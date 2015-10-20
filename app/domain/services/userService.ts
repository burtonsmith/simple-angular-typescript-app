module app.domain.services {
	'use strict';

	interface IUserService {
		getAll(): entities.IUser[];
		getByLogin(userLogin: string): entities.IUser;
	}

	export class UserService implements IUserService {
		static $inject: string[] = ['dataAccessService'];
		constructor(private dataAccessService: dataAccess.DataAccessService<entities.IUser>) {

		}

		getAll(): app.domain.entities.IUser[] {
			var users: app.domain.entities.IUser[];
			var userResource = this.dataAccessService.getDataResource('https://api.github.com/users');
			userResource.query((data: app.domain.entities.IUser[]) => {
				users = data;
			});
			
			return users;
		}

		getByLogin(userLogin: string): entities.IUser {
			var user: entities.IUser;
			var userResource = this.dataAccessService.getDataResource('https://api.github.com/users/:userLogin');
			userResource.get({ userLogin : userLogin }, (data: app.domain.entities.IUser) => {
				user = data;
			});
			
			return user;
		}
	}

	angular
		.module('domain')
		.service('userService',
					UserService);

}
