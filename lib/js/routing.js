app.config(function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl  : 'lib/js/views/accueil.html',
			controller   : 'AccueilCtrl',
			controllerAs : 'accueil'
		})
		.when('/scores', {
			templateUrl  : 'lib/js/views/scores.html',
			controller   : 'ScoresCtrl',
			controllerAs : 'scores'
		})
		.when('/questions', {
			templateUrl  : 'lib/js/views/questions.html',
			controller   : 'QuestionsCtrl',
			controllerAs : 'questions'
		})
		.otherwise({
			redirectTo	 : '/'
		});

		$locationProvider.html5Mode(true);
});