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

  robot.hear(/do you know (.*)/i, function(res) {
    var inputName = res.match[1];
    var knownPeople = ["bert", "kirby", "keenan" , "sidney", "tom", "carter", "bernie", "eduardo", "pierre", "scott"];

    if (knownPeople.indexOf(inputName.toLowerCase()) >= 0) {
      return res.send("Yes, of couse I know " + inputName)
    }
    else {
      return res.send("Nope, never heard of anyone called " + inputName)
    }
  });

  robot.hear(/who are your friends?/i, function(res) {
    var knownPeople = ["Bert", "Kirby", "Keenan" , "Sidney", "Tom", "Carter", "Bernie", "Eduardo", "Pierre", "Scott"];
    return res.send("I have many, but my best friends are " + knownPeople.join(', ') + ".")
  });

  robot.hear(/home!/i, function(res) {
    var request = require('request');
    let times = new Array;
    var response = '';

    var req = request('http://realtime.mbta.com/developer/api/v2/predictionsbystop?api_key=wX9NwuHnZU2ToO7GmGR9uw&stop=place-sstat&format=json', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // success, let's continue
      } else {
        console.log(response.statusCode);
        return
      }

      var response = (JSON.parse(req.response.body));

      if (typeof(response.mode) != 'undefined') {
        var subway = response.mode[0].route[0].direction[0].trip
        
        subway.forEach(function(obj) {
            var d = new Date(0);
            d.setUTCSeconds(obj.sch_dep_dt);
            times.push(d.toLocaleTimeString());
            console.log(obj.sch_dep_dt + ' ' + d.toLocaleTimeString())
            //return res.send(times.join(', '));
        });
      } else {
        return res.send("There are no trains, better walk home.");
      }
      var last = times.pop();
      return res.send("The next southbound Red Line trains from south station are at " + times.join(', ') + " & " + last);
    });
  });

  robot.hear(/send (.*) a message/i, function(res) {
    var inputName = res.match[1];
    var classmates = {
      erica: "@erica",
      alex: "@labianca",
      michael: "@myounkie",
      ollie: "@oli-g",
      scott: "@scobban",
      tristan: "@tcooper",
      john: "@jgennell",
      tyler: "@tylerism",
      sonyl: "@sonylnagale",
      trevor: "@albrechs"
    };

    if (classmates[inputName]) {
      room = classmates[inputName];
      return robot.messageRoom(room, "Hi " + inputName + ", Trevor asked me to say hi to you")
    } else {
      return res.send("I'm sorry, I dont think I know that person")
    };
  });
}