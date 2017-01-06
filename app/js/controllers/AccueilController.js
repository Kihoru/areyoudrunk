'use strict';

AccueilCtrl.$inject = ['$location'];

app.controller('AccueilCtrl', AccueilCtrl); 

function AccueilCtrl($location) {
	
	let accueil = this;

	accueil.continue = false;

	accueil.redirect = function()
	{
		$location.path('/questions');
	}
}