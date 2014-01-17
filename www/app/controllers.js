var weegoinControllers = angular.module('weegoinApp.controllers', []);

weegoinControllers.controller('MainMenuCtrl',

	['$scope', '$http', '$location', 'userService',

	function($scope, $http, $location, $user) {

		$scope.selectedIndex = 0;

		$scope.items = [

			{n: 0, label: "Estabelecimentos", value: "places"},
			{n: 1, label: "Calendário", value: "calendar"},
			{n: 2, label: "Perfil", value: "profile"},
			{n: 3, label: "Configurações", value: "settings"},
			{n: 4, label: "Contato", value: "contact"},
			{n: 4, label: "Sair", value: "logout"},
		]

		$scope.state = function(s) {
			return s == $scope.selectedIndex ? 'current' : '';
		}

		$scope.goto = function(path) {

			for(var i = 0; i < $scope.items.length; i++) {
				if($scope.items[i].value == path)
					$scope.selectedIndex = $scope.items[i].n
			}

			$location.path(path);
		}
	}
])

weegoinControllers.controller('HomeCtrl', 

	['$scope', '$http', '$location',

	function($scope, $http, $location) {
		return null;		
	}
])

weegoinControllers.controller('PlaceCtrl', 

	['$scope', '$http', '$location',

	function($scope, $http, $location) {
		return null;		
	}
])

weegoinControllers.controller('PlaceEventCtrl', 

	['$scope', '$http', '$location',

	function($scope, $http, $location) {
		return null;		
	}
])

weegoinControllers.controller('PublicEventCtrl', 

	['$scope', '$http', '$location', 'shareService',

	function($scope, $http, $location, $share) {
		
		$scope.share = function() {

			$share.show({
				message: "Mensagem exemplo",
				subject: "weego.in",
				image: 'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-prn2/1395200_477436185703086_1623485670_n.jpg',
				link: 'http://weego.in'
			})
		}
	}
])

weegoinControllers.controller('PrivateEventCtrl', 

	['$scope', '$http', '$location', 'shareService',

	function($scope, $http, $location, $share) {
		
		$scope.share = function() {

			$share.show({
				message: "Mensagem exemplo",
				subject: "weego.in",
				image: 'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-prn2/1395200_477436185703086_1623485670_n.jpg',
				link: 'http://weego.in'
			})
		}
	}
])

weegoinControllers.controller('ContactCtrl', 

	['$scope', '$http', '$location',

	function($scope, $http, $location) {
		return null;		
	}
])

weegoinControllers.controller('LogoutCtrl', 

	['$scope', '$http', '$location',

	function($scope, $http, $location) {

		navigator.notification.alert(
			'You are the winner!',  function(){},
			'Game Over', 'Done'
		);
	}
])