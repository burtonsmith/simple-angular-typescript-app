module app.users {
	'use strict';

	interface IUserListController {
		title: string;
		users: ng.resource.IResourceArray<dataAccess.IDataResource<domain.entities.IUser>>;
		showImage: boolean;
		toggleImage(): void;
		activate: () => void;
		getUsers(): void;
	}

	class UserListController implements IUserListController {
		title: string = 'User List';
		users: ng.resource.IResourceArray<dataAccess.IDataResource<domain.entities.IUser>>;
		showImage: boolean;

		static $inject: string[] = ['userService', 'dataAccessService'];
		constructor(private userService: app.domain.services.UserService, private dataAccessService: dataAccess.DataAccessService<domain.entities.IUser>) {
			this.activate();
			this.showImage = true;
		}

		getUsers(): void {	
			this.userService.getAll().$promise.then((data: ng.resource.IResourceArray<dataAccess.IDataResource<domain.entities.IUser>>) => {
				this.users = data;
			 });
		}
		
		toggleImage(): void {
			this.showImage = !this.showImage;
		}

		activate() {
			this.getUsers();
		}
	}

	angular.module('app').controller('UserListController', UserListController);
}