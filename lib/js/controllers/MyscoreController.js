'use strict';

app.controller('MyscoreCtrl', function($interval, $scope, $http, $location, $sessionStorage){
	$scope.storage = $sessionStorage;
	console.log($scope.storage.score);
	// score   input nom,  firebase.
	//calcul -> tu peut prendre la voiture ou pas.
});