var app = angular.module('noted');

app.controller('genCtrl', ['$scope', function($scope, $rootScope){
	$scope.username = "David";
	$scope.app = {title:"Noted"};
	
}])

app.controller('homeCtrl', ['$scope', function($scope){	
	$scope.testing = 'hello it works'
}])