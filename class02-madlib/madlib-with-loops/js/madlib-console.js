var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

function newStartup(){
		var startupNew = document.createTextNode('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
		document.getElementById('xForY').appendChild(startupNew);
}


