
tblScores.$inject = ['$firebaseArray'];

app.factory('tblScores', tblScores);

function tblScores($firebaseArray) {

	let ref = new Firebase("https://areyoudrunk-936e6.firebaseio.com/");

	return $firebaseArray(ref);
}