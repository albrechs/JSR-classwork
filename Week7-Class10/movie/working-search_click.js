'use strict';
var MovieApp = {};

// This is the same as document ready btw.
$(function() {
	// This is where you register your event listeners
	$('#movie_form').submit(function(event) {
		event.preventDefault();
		var input = $('#movie_search').val();
		var request = $.ajax({
			url: 'http://www.omdbapi.com/',
			data: {s:input, apikey: 'ada5c403'}
		});

		request.done(function(data){
			console.log(data.Search);
			var movies = data.Search;
			for(var i=0; i<movies.length; i++) {
				var image = movies[i].Poster;
				var $html = $('<a class="image" data-title="'+movies[i].Title+'"><img src="'+image+'"/></a>');
				$('body').append($html);    
			}
		});
	});

	$('body').on('click', '.image', function(){
		console.log($(this).data('title'));								
	});
});


