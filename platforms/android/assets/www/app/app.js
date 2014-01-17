var weegoinApp = angular.module('weegoinApp', [
	'ngRoute',
	'weegoinApp.controllers',
	'weegoinApp.services',
	'weegoinApp.directives',
]);

weegoinApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider

			.when('/', {
				redirectTo: "/places"
			})

			.when('/places', {
				templateUrl: 'views/list.html'
			})

			.when('/place/:id', {
				templateUrl: 'views/place.html',
				controller: 'PlaceCtrl'	
			})

			.when('/place/:id/events', {
				templateUrl: 'views/events_place.html',
				controller: 'PlaceEventCtrl'	
			})

			.when('/event/public', {
				templateUrl: 'views/event_public.html',
				controller: 'PublicEventCtrl'	
			})

			.when('/event/private', {
				templateUrl: 'views/event_private.html',
				controller: 'PrivateEventCtrl'	
			})

			.when('/contact', {
				templateUrl: 'views/contact.html',
				controller: 'ContactCtrl'	
			})

			.when('/logout', {
				templateUrl: 'views/home.html',
				controller: 'LogoutCtrl'	
			})

			.otherwise({
				redirectTo: "/places"
			})

		$locationProvider.html5Mode(false)
		$locationProvider.hashPrefix('!');
	}
])