'use strict';

app.controller('MyscoreCtrl', function($interval, $scope, $http, $location, $sessionStorage){
	$scope.storage = $sessionStorage;
	console.log($scope.storage.score);
	
	// score   input nom,  firebase.
	//calcul -> tu peut prendre la voiture ou pas.

	$scope.message = "";
	$scope.answer();
	$scope.answer = function(){
		
		if($scope.storage.score > 4) {
			$scope.message = "Même Chuck Norris n'a jamais été aussi sobre que vous ! Bonne route";
		}
		else if ($scope.storage.score >= 0 && 5 > $scope.storage.score) {
			$scope.message = "Vous semblez un peu stressé. Détendez-vous, tout va bien ! Vous pouvez-y allez, et surtout roulez tranquillement !";
		}
		else if ($scope.storage.score < 0 && -3 > $scope.storage.score) {
			$scope.message = "Avec des réponses pareilles, mieux vaut être prudent. Attendez un peu avant de reprendre la route.";
		}
		else if ($scope.storage.score < -2) {
			$scope.message = "Bon, il est définitivement temps d'aller cuver votre alcool !!! Jetez immédiatement ces clés de voiture !";
		}
	}
});