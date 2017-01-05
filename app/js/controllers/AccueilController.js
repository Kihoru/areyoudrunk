'use strict';

app.controller('AccueilCtrl',['$location', function($location) {
	let accueil = this;

	accueil.continue = false;

	accueil.redirect = function()
	{
		$location.path('/questions');
	}

}]);