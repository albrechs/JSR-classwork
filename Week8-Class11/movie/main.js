'use strict';
var MovieApp = {
	movies: []
};

MovieApp.baseEndpoint = 'http://www.omdbapi.com/';

MovieApp.populateMovieList = function(movie){
	var movies = MovieApp.movies;
	for(vari=0;i<movies.length;i++){
		var html = MovieApp.createMovie(movie)
	}

}

MovieApp.createMovie = function(item) {
  var source = $('#movie_template').html();
  var template = Handlebars.compile(source);
  return template(item);
}

MovieApp.search = function(input) {
	MovieApp.displayMovies = [];

	var request = $.ajax({
		url: MovieApp.baseEndpoint,
		data: {s:input,apikey:"ada5c403"}
	});
	
	request.done(function(data){
		var movies = data.Search;
		MovieApp.movies = movies;
		console.log(MovieApp.movies)
		$('#search_results').empty();
		
		
		for(var i=0; i<movies.length; i++){
			var tempImage = {
				 imdbID: movies[i].imdbID,
				 poster: movies[i].Poster 
			};
			console.log(tempImage)
			var movieHTML = MovieApp.createMovie(tempImage);
			console.log(movieHTML)
			$('#search_results').append(movieHTML);
		}




		
	});
}

MovieApp.showMoreInfo = function(id) {
	var request = $.ajax({
		url: MovieApp.baseEndpoint,
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

$(function() {
	$('#movie_form').submit(function(event){
		event.preventDefault();
		var input = $('#movie_search').val();
		console.log(input);
		MovieApp.search(input);	
	})

	$('#search_results').on('click', '.poster', function(){
		var searchID = $(this).data('imdbid');
		console.log(searchID)
		MovieApp.showMoreInfo(searchID);
	})

});