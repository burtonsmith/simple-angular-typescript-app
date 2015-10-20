module app.users {
	'use strict';

	interface IUserListController {
		title: string;
		users: domain.entities.IUser[];
		showImage: boolean;
		toggleImage(): void;
		activate: () => void;
	}

	class UserListController implements IUserListController {
		title: string = 'User List';
		users: domain.entities.IUser[];
		showImage: boolean;
		
		static $inject: string[] = ['userService'];
		constructor(userService: app.domain.services.UserService) {
			this.activate();
			this.showImage = true;
			this.users = userService.getAll();
		}

		toggleImage(): void {
			this.showImage = !this.showImage;
		}		
		
		activate() {

		}
	}

	angular.module('app').controller('UserListController', UserListController);
}