module.exports = function(robot) {
  robot.hear(/Hello!/i, function(res) {
    return res.send("Hi there!");
  });

  robot.hear(/how are you?/i, function(res) {
  	return res.send("Excuse me. I have to go. Somewhere there is a crime happening.");
  });

  robot.hear(/what are your prime directives?/i, function(res) {
  	return res.send("Serve the public trust, protect the innocent, uphold the law.");
  });

  robot.respond(/pick a card/i, function(res) {
  	var cards = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
  	var suits = ["Hearts", "Spades", "Clubs", "Diamonds"];

  	var cRand = Math.floor(Math.random() * 13);
  	var sRand = Math.floor(Math.random() * 4);

  	return res.reply(cards[cRand] + " of " + suits[sRand])
  });

  robot.hear(/do you know (.*)?/i, function(res) {
  	var inputName = res.match;
  	var knownPeople = ["Bert", "Kirby", "Keenan" , "Sidney", "Tom", "Carter", "Bernie", "Eduardo", "Pierre", "Scott"];

  	if (knownPeople.includes(inputName)) {
  		return res.send("Yes, of couse I know " + inputName)
  	}
  	else {
  		return res.send("Nope, never heard of anyone called " + inputName)
  	}
  });

  //robot.hear(/ /i, function(res) {

  //	return
  //});
}