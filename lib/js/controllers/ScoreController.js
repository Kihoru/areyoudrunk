app.factory('tblScores', ['$firebaseArray', function($firebaseArray) {
	let ref = new Firebase("https://areyoudrunk-936e6.firebaseio.com/");

	return $firebaseArray(ref);
}]);

app.controller('ScoresCtrl', ['tblScores', function(tblScores) {
	let score = this;

	score.scores = tblScores; 

	score.addLine = function() {
		/*if(!score.newScoreUser && !score.newScoreResult){ return; }*/
		score.scores.$add({
			from: score.user,
			content: score.result
		});
	};

	score.remaining = function()
	{
		let compteur = 0;
		for(let i = 0; i < score.tblScores.length; i++)
		{
			/*if(score.tblScores[i].done === false)
			{
				compteur++;
			}*/
		}
		return compteur;
	};
}]);