'use strict';

app.controller('QuestionsCtrl', function($interval, $scope, $http, $location, $sessionStorage) {

	let questions = this;
	$scope.storage = $sessionStorage;

	$scope.list = [];
	$http.get('/app/js/questions.json')
		.then(function(res){
			$scope.list = res.data;
			++$scope.index;
			let random = Math.floor(Math.random()*$scope.list.length);
			$scope.current = $scope.list[random];
			console.log($scope.current.answers);
			$scope.current.answers = $scope.shuffle($scope.current.answers);
			console.log($scope.current.answers);
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
			console.log($scope.current.answers);
			$scope.current.answers = $scope.shuffle($scope.current.answers);
			console.log($scope.current.answers);
			$scope.list.splice(random, 1);
		}	
	};

	$scope.shuffle = function(a) {
		for (let i = a.length; i; i--) {
	        let j = Math.floor(Math.random() * i);
	        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    	}

    	return a;
	}
});