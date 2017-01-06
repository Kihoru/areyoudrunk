'use strict';

// DEPENDENCIES
QuestionsCtrl.$inject = ['$interval', '$scope', '$http', '$location', '$sessionStorage'];

// CONTROLLER DECLARATION
app.controller('QuestionsCtrl', QuestionsCtrl);

// FONCTION DU CONTROLLER
function QuestionsCtrl($interval, $scope, $http, $location, $sessionStorage) {

	let questions = this;

	//Récupération des datas en session.
	$scope.storage = $sessionStorage; 

	//Déclaration des variables $scope
	$scope.list = [];
	$scope.index = 0;
	$scope.score = 1;
	$scope.maxQuestion = 5;
	$scope.begin = false;
	$scope.res = '';
	$scope.showScore = false;

	//Récupération des questions dans le fichier Json
	$http.get('/app/js/questions.json')
		.then(function(res){

			//Injection des datas dans la liste du $scope
			$scope.list = res.data;

			/**
			* Premier choix de question aléatoire dans le tableau
			* Incrémentation du $scope.index
			* Choix d'un index random dans la liste des questions
			* Attribut la question aléatoire dans la question en cours (current)
			* Supression de la question dans la liste (évite les doublons)
			**/
			++$scope.index;
			let random = Math.floor(Math.random()*$scope.list.length);
			$scope.current = $scope.list[random];
			$scope.current.answers = $scope.shuffle($scope.current.answers);
			$scope.list.splice(random, 1);
		});
	
	/**
	*	Fonction chrono
	*	Avec $interval	
	**/
	$scope.chrono = function() {

		//Si le bouton de démarage du questionnaire à été cliquer
		//On met le timer a 100 et l'interval se lance.
		if($scope.begin===true) {
			$scope.timer = 100;
		}

		$scope.interval = $interval(function() {

			$scope.timer -= 100 / (7000/ (1000/60) );

			//Au bout de 7s On lance la fonction send
			if ($scope.timer <= 0) {
				$scope.send();
			}
		}, 1000/60);
	}
	/**
	*	Fonction send
	**/
	$scope.send = function() {

		//Récupère la réponse choisie, ajoute ou enlève des pts au score selon le resultat
		//De la comparaison entre la valeur et la bonne réponse dans la current question.
		if(questions.res===$scope.current.goodAnswer){

			if($scope.timer>=50)
				$scope.score+=2;
			else
				$scope.score+=1;

		}else{
			$scope.score-=2;
		}

		// Si le nombre de question est === à 5
		// Alors on arrète l'$interval et on rejoint la page score
		// Avec les données stockées dans le session storage.
		if ($scope.maxQuestion === $scope.index) {
			$interval.cancel($scope.interval);
			$scope.storage.gamePlayed = true;
			$scope.storage.score = $scope.score;
			$location.path('/myscore');
		}else{

			// Sinon on lance la prochaine question, et on remet le timer à 0;
			// Et on incrémente l'index
			$scope.timer = 100;

			++$scope.index;

			let random = Math.floor(Math.random()*$scope.list.length);
			$scope.current = $scope.list[random];
			$scope.current.answers = $scope.shuffle($scope.current.answers);
			$scope.list.splice(random, 1);
		}	
	}
	/**
	*	Fonction shuffle (utilitaire)
	*	Shuffle un tableau aléatoirement
	**/
	$scope.shuffle = function(a) {
		for (let i = a.length; i; i--) {
	        let j = Math.floor(Math.random() * i);
	        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    	}

    	return a;
	}
}