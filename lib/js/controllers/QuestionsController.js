'use strict';

app.controller('QuestionsCtrl', function($interval, $scope, $http, $location, $sessionStorage) {

	let questions = this;
	$scope.storage = $sessionStorage;

	$scope.list = [];
	$http.get('/lib/js/questions.json')
		.then(function(res){
			$scope.list = res.data;
			++$scope.index;
			let random = Math.floor(Math.random()*$scope.list.length);
			$scope.current = $scope.list[random];
			$scope.list.splice(random, 1);
		});

	$scope.index = 0;
	$scope.score = 1;
	$scope.maxQuestion = 5;
	$scope.begin = false;
	$scope.res = '';
	$scope.showScore = false;

	$scope.chrono = function() {

		if($scope.begin===true) {
			$scope.timer = 100;
		}

		$scope.interval = $interval(function() {
			$scope.timer -= 100 / (7000/ (1000/60) );
			
			if ($scope.timer <= 0) {
				$scope.send();
			}
		}, 1000/60);

	}

	$scope.send = function() {
		
		if(questions.res===$scope.current.goodAnswer){

			if($scope.timer>=50)
				$scope.score+=2;
			else
				$scope.score+=1;

		}else{
			$scope.score-=2;
		}


		if ($scope.maxQuestion === $scope.index) {
			$interval.cancel($scope.interval);
			$scope.storage.score = $scope.score;
			$location.path('/myscore');
		}else{
			$scope.timer = 100;
			++$scope.index;
			let random = Math.floor(Math.random()*$scope.list.length);
			$scope.current = $scope.list[random];
			$scope.list.splice(random, 1);
		}
		
		
		
	};
});