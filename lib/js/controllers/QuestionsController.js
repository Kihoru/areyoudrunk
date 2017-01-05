'use strict';

app.controller('QuestionsCtrl', function($interval, $scope) {

	$scope.list = [
		{
			'question': 'Êtes-vous bourré ? (entourez votre réponse)',
			'answers' : [
				'Oui',
				'Non',
				'C\'était quoi la question ?',
				'On peut pas entourer...'
			],
			'goodAnswer': 'On peut pas entourer...'
		},
		{
			'question': '1+1',
			'answers' : ['1', '2', '3', '4'],
			'goodAnswer': '2'
		},
		{
			'question': '2+2',
			'answers' : ['1', '2', '3', '4'],
			'goodAnswer': '4'
		},
		{
			'question': '1+2',
			'answers' : ['1', '2', '3', '4'],
			'goodAnswer': '3'
		},
		{
			'question': '1+0',
			'answers' : ['1', '2', '3', '4'],
			'goodAnswer': '1'
		}
	];

	$scope.index = 0;
	$scope.score = 0;
	$scope.maxQuestion = 5;
	$scope.begin = false;

	$scope.current = $scope.list[$scope.index];

	$scope.chrono = function() {

		if($scope.begin===true) {
			$scope.timer = 100;
		}

		let interval = $interval(function() {
			$scope.timer -= 100 / (7000/ (1000/60) );
			
			if ($scope.timer <= 0) {
				$scope.send();
			}
		}, 1000/60);

	}

	$scope.send = function() {

		if($scope.res===$scope.current.goodAnswer)
			$scope.score+=1;
		else
			$scope.score-=1;


		if ($scope.maxQuestion === $scope.index + 1) {
			console.log('NO MORE QUESTIONS');
		}else{
			$scope.timer = 100;
			$scope.current = $scope.list[++$scope.index];
		}
		
		
		
	};
});