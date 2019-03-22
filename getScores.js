
var getScores = function(wordsFlat){

	// -----------------------------------
	//  YOUR CODE
	//  Count the word frequency
	//  Return object with word counts
	// -----------------------------------	
	var scores = {};
	wordsFlat.forEach(function(item){
		var word = item;
		if (!scores[word]){
			scores[word] = 1;
		}else{
			scores[word]++;
		}
	})

	return scores;

}


module.exports = getScores;