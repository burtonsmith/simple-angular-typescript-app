module app.users {
	'use strict';

	interface IUserDetailController {
		title: string;
		user: domain.entities.IUser;
		activate: () => void;
	}

	interface IUserParams extends ng.route.IRouteParamsService {
		userLogin: string;
	}
	
	class UserDetailController implements IUserDetailController {
		title: string = 'User Details';
		user: domain.entities.IUser;
		
		static $inject: string[] = ['$routeParams', 'userService'];
		constructor(private $routeParams: IUserParams,
			userService: app.domain.services.UserService) {
			this.user = userService.getByLogin($routeParams.userLogin);

			this.activate();
		}

		activate() {

		}
	}

	angular
		.module('app')
		.controller('UserDetailController',
						UserDetailController);
}