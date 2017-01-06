'use strict'; 

app.config(function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl  : 'app/views/accueil.html',
			controller   : 'AccueilCtrl',
			controllerAs : 'accueil'
		})
		.when('/scores', {
			templateUrl  : 'app/views/scores.html',
			controller   : 'ScoresCtrl',
			controllerAs : 'score'
		})
		.when('/myscore', {
			templateUrl  : 'app/views/myscore.html',
			controller   : 'MyscoreCtrl',
			controllerAs : 'myscore',
			resolve: {
				"check" : function($sessionStorage, $location){
							if($sessionStorage.gamePlayed==false){
								$location.path('/');
							}
						}
			}
		})
		.when('/questions', {
			templateUrl  : 'app/views/questions.html',
			controller   : 'QuestionsCtrl',
			controllerAs : 'questions',
			resolve: {
				"check" : function($sessionStorage, $location){
							if($sessionStorage.canPlay==false){
								$location.path('/');
							}
						}
			}
		})
		.otherwise({
			redirectTo	 : '/'
		});

		$locationProvider.html5Mode(true);
});