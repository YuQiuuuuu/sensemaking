
const  cheerio = require('cheerio');
var getTitles = function(mitcourses){

	// -----------------------------------
	//  YOUR CODE
	//  Get the course titles
	//  Return array of course titles
	// -----------------------------------	
	var titles = [];
	const $ = cheerio.load(mitcourses)
	$("h3").each(function(i,element){
		titles.push($(element).text());
	})

	return titles;
	
}


module.exports = getTitles;