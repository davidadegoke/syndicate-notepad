var app = angular.module('noted');

	app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('dashboard', {
			url: '/',
			templateUrl: 'assets/templates/dashboard.html'
		})
		.state('notes', {
			url: '/notes',
			templateUrl: 'assets/templates/notes.html'
		})
		.state('todos', {
			url: '/todos',
			templateUrl: 'assets/templates/todos.html'
		})
		.state('calendar', {
			url: '/calendar',
			templateUrl: 'assets/templates/calendar.html'
		})
		.state('settings', {
			url: '/settings',
			templateUrl: 'assets/templates/settings.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'assets/templates/settings.html'
		})
		
	}]);