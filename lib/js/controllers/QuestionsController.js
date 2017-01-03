'use strict';

app.controller('QuestionsCtrl', function($scope, $timeout) {

	var questions = this;

	questions.questions = [

		{
			'question': 'Êtes-vous bourré ? (entourez votre réponse)',
			'answers' : [
				'Oui',
				'Non',
				'C\'était quoi la question ?',
				'On peut pas entourer...'
			],
			'goodIndex': 3
		},
		{
			'question': 'myquestion',
			'answers' : ['1', '2', '3', '4'],
			'goodIndex': 2
		},
		{
			'question': 'myquestion',
			'answers' : ['1', '2', '3', '4'],
			'goodIndex': 2
		},
		{
			'question': 'myquestion',
			'answers' : ['1', '2', '3', '4'],
			'goodIndex': 2
		},
		{
			'question': 'myquestion',
			'answers' : ['1', '2', '3', '4'],
			'goodIndex': 2
		}
	];

	questions.current_question = {};
	questions.current_answers = [];
	$scope.currentScore = 0;
	$scope.currentIndex = 0;

	$scope.addQuestion = function(){

		if(questions.choice){

			let resIndex = questions.current_question.answers.indexOf(questions.choice);

			if(questions.current_question.goodIndex == resIndex)
				$scope.currentScore++;
			else
				$scope.currentScore--;		
		}

		questions.current_question = questions.questions[$scope.currentIndex];
		questions.current_answers = questions.questions[$scope.currentIndex].answers.sort($scope.random);
		//orderByFilter(questions.questions[$scope.currentIndex].answers, questions.random);

		if($scope.currentIndex + 1 >questions.questions.length){
			$scope.end($scope.currentScore);
		}

		$scope.currentIndex++;
		$timeout($scope.addQuestion, 7000);
	}

	$scope.end = function(score){
		alert('test');
	}

	questions.random = function() {
        return 0.5 - Math.random();
    }

});