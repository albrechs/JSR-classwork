// Lets create a movie app that will accept a search and return a list of results
/*

1) Accept a query from the user and get results. (All via AJAX... duhhhh)
2) I want it to display the results by outputting the movie posters as image tags
3) Upon interacting with the movie poster (click, mouseover, etc..) you should display 4 extra pieces 
  of information about that movie. I don't care which
4) Bonus: Display a total of 8 pieces of information about the movie
5) Bonus: Do a type ahead so that the form works as autocomplete. 
6) Bonus: Make it pretty


Example endpoint: http://www.omdbapi.com/?i=tt3896198&apikey=ada5c403

*/

'use strict';
var MovieApp = {};

MovieApp.displayMovies = [];

MovieApp.compileItem = function(item) {
	var source = $('#poster-template').html();
	var template = Handlebars.compile(source);

	return template(item);
}

MovieApp.search = function(input) {
	MovieApp.displayMovies = [];

	var request = $.ajax({
		url: 'http://www.omdbapi.com/',
		data: {s:input,apikey:"ada5c403"}
	});
	
	request.done(function(data){
		var movies = data.Search;
		MovieApp.movies = movies;
		$('#search_results').empty();
		for(var i=0; i<movies.length; i++){
			var tempImage = "<a class='poster' data-imdbID='" + movies[i].imdbID +  "'><img src='" + movies[i].Poster + "'/></a>";
			$('#search_results').append(tempImage);
		}
	});
}

MovieApp.showMoreInfo = function(id) {
	var request = $.ajax({
		url: 'http://www.omdbapi.com/',
		data: {i:id,apikey:"ada5c403"}
	});

	request.done(function(data){
		var info = {
			"Title": data.Title,
			"Release Date": data.Released,
			"Rating": data.Rated,
			"Director": data.Director,
			"Stars": data.Actors,
			"Country": data.Country,
			"IMDB Rating": data.imdbRating + "/10",
			"Number of IMDB Ratings": data.imdbVotes
		};

		var plot = "Plot: " + data.Plot;

		console.log(id)
		console.log(data)
		console.log(info)

		function printObject(obj, plot) {
  		var out = '';
  		for (var i in obj) {
    		out += i + ': ' + obj[i] + '\n';
  		}
  		alert(out + '\n' + plot);
		}
		
		printObject(info, plot);
	});
}



// This is the same as document ready btw.
$(function() {
	$('#movie_form').submit(function(event){
		event.preventDefault();
		var input = $('#movie_search').val();
		console.log(input)
		MovieApp.search(input);	
	})

	$('#search_results').on('click', '.poster', function(){
		var searchID = $(this).data('imdbid');
		console.log(searchID)
		MovieApp.showMoreInfo(searchID);
	})

});
