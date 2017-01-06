'use strict';

MyscoreCtrl.$inject = ['tblScores', '$interval', '$scope', '$http', '$location', '$sessionStorage'];
app.controller('MyscoreCtrl', MyscoreCtrl);

function MyscoreCtrl(tblScores, $interval, $scope, $http, $location, $sessionStorage){

	// Déclaration des variables pour les fonctions
	$scope.storage 		= $sessionStorage;
	$scope.scores 		= tblScores;
	$scope.scoreUser 	= "";
	$scope.message 		= "";
	$scope.valide		= "";
	$scope.imgChange 	= "";
	$scope.color 		= ""; 

	// Fonction d'affichage de message &image en fonction du score
	$scope.answer = function(){
		
		if($scope.storage.score > 4) {
			$scope.message = "Même Chuck Norris n'a jamais été aussi sobre que vous ! Bonne route";
			$scope.valide = "OK";
			$scope.color = "green";
			$scope.imgChange = "notdrunk.jpg";
		}
		else if ($scope.storage.score >= 0 && 5 > $scope.storage.score) {
			$scope.message = "Vous semblez un peu stressé. Détendez-vous, tout va bien ! Vous pouvez-y allez, et surtout roulez tranquillement !";
			$scope.valide = "OK";
			$scope.color = "green";
			$scope.imgChange = "notdrunk2.jpg";
		}
		else if ($scope.storage.score < 0 && -3 > $scope.storage.score) {
			$scope.message = "Avec des réponses pareilles, mieux vaut être prudent. Attendez un peu avant de reprendre la route.";
			$scope.valide = "KO";
			$scope.color = "red";
			$scope.imgChange = "drunk.png";
		}
		else if ($scope.storage.score < -2) {
			$scope.message = "Bon, il est définitivement temps d'aller cuver votre alcool !!! Jetez immédiatement ces clés de voiture !";
			$scope.valide = "KO";
			$scope.color = "red";
			$scope.imgChange = "drunkat.jpg";
		}
	}
	$scope.answer();

	// Fonction d'ajout des valeurs dans la database de firebase
	$scope.scoreAddLine = function(){
		if(!$scope.scoreUser){ return; }
		$scope.scores.$add({
			from: $scope.scoreUser,
			content: $scope.storage.score
		});
		$location.path('/scores');
	};
}