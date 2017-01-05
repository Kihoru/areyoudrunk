'use strict';

app.controller('MyscoreCtrl', function($interval, $scope, $http, $location, $sessionStorage){
	$scope.storage = $sessionStorage;
	console.log($scope.storage.score);
});