var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

function pickRandoms(array){	
	var random1 = Math.floor((Math.random() * array.length));
	// var random2 = Math.floor((Math.random() * startupY.length));

	return array[random1];
}

// console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

function newStartup(){
	var startupNew = document.createTextNode('A startup that is ' + pickRandoms(startupX) + ', but for ' + pickRandoms(startupY));
	console.log('A startup that is ' + pickRandoms(startupX) + ', but for ' + pickRandoms(startupY));

	if (document.getElementById('xForY').childNodes.length === 0) {
		document.getElementById('xForY').appendChild(startupNew);
	}
	else {
		document.getElementById('xForY').removeChild(document.getElementById('xForY').childNodes[0]);
		document.getElementById('xForY').appendChild(startupNew);
	}
}


