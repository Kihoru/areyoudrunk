'use strict';

ScoresCtrl.$inject = ['tblScores'];

app.controller('ScoresCtrl', ScoresCtrl);

function ScoresCtrl(tblScores) {
	let score = this;

	score.scores = tblScores; 

	// Récupération des données de la database sur firebase
	score.remaining = function() {
		let compteur = 0;
		for(let i = 0; i < score.tblScores.length; i++)
		{
			if(score.tblScores[i].done === false)
			{
				compteur++;
			}
		}
		return compteur;
	};
}