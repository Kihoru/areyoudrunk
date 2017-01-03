'use strict';

app.controller('QuestionsCtrl', function($scope) {


	$scope.questions = [

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


});