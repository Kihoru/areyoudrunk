'use strict';

AccueilCtrl.$inject = ['$location', '$sessionStorage', '$scope'];

app.controller('AccueilCtrl', AccueilCtrl); 

function AccueilCtrl($location, $sessionStorage, $scope) {
	
	let accueil = this;

	$scope.storage = $sessionStorage;

	$scope.storage.gamePlayed = false;
	$scope.storage.canPlay = false;

	accueil.continue = false;

	accueil.redirect = function()
	{
		$location.path('/questions');
	}
}