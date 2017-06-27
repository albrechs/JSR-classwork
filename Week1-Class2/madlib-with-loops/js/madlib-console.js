var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var favorites = [];

function pickRandoms(array){	
	var random1 = Math.floor((Math.random() * array.length));
	// var random2 = Math.floor((Math.random() * startupY.length));

	return array[random1];
}

// console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

function newStartup(){
	var output = 'A startup that is ' + pickRandoms(startupX) + ', but for ' + pickRandoms(startupY)
	var startupNew = document.createTextNode(output);
	console.log(output);

	if (document.getElementById('xForY').childNodes.length === 0) {
		document.getElementById('xForY').appendChild(startupNew);
	}
	else {
		document.getElementById('xForY').removeChild(document.getElementById('xForY').childNodes[0]);
		document.getElementById('xForY').appendChild(startupNew);
	}
}

function addFavorite(){
	favorites.push(document.getElementById('xForY').childNodes[0]);
	console.log('Added "' + document.getElementById('xForY').childNodes[0] + '" to favorites')
	console.log(favorites)
}


