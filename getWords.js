
var getWords = function(titles){

	// -----------------------------------
	//  YOUR CODE
	//  Filter out punctuation/numbers
	//  Return words array
	// -----------------------------------	
	// console.log(titles)
    var words = titles.map(function(item){
		return item.match(/([A-Za-z]+)/g);
	})
	return words;
}


module.exports = getWords;