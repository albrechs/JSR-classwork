module.exports = function(robot) {
  robot.hear(/Hello!/, function(res) {
    return res.send("Hi there!");
  });

  robot.hear(/how are you?/i, function(res) {
  	return res.send("Excuse me. I have to go. Somewhere there is a crime happening.");
  });

  robot.hear(/what are your (/prime directives?/i, function(res) {
  	return res.send("Serve the public trust, protect the innocent, uphold the law.");
  });

  robot.hear(/pick a card!/i, function(res) {
  	var cards = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
  	var suits = ["Hearts", "Spades", "Clubs", "Diamonds"];

  	var cRand = Math.floor((Math.random() * 13) - 1);
  	var sRand = Math.floor((Math.random() * 4) - 1);

  	return cards[cRand] + " of " + suits[sRand];
  });

  robot.hear(/ /i, function(res) {

  	return
  });

  robot.hear(/ /i, function(res) {

  	return
  });
}