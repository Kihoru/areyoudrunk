'use strict';

app.controller('MyscoreCtrl', ['tblScores', '$interval', '$scope', '$http', '$location', '$sessionStorage', 'tblScores',
	function($interval, $scope, $http, $location, $sessionStorage, tblScores){

	$scope.storage = $sessionStorage;
	$scope.scoreUser = "";
	$scope.message = "";
	$scope.scores = tblScores;

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
	$scope.answer();

	// Ajout des valeurs dans la database de firebase
	$scope.scoreAddLine = function(){
		/*if(!score.newScoreUser && !score.newScoreResult){ return; }*/
		$scope.scores.$add({
			from: $scope.scoreUser,
			content: $scope.storage.score
		});
	};
	}
]);
	