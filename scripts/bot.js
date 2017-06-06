module.exports = function(robot) {
  robot.hear(/Hello!/, function(res) {
    return res.send("Hi there!");
  });

  robot.hear(/(H|h)ow are you?/, function(res) {
  	return res.send("Excuse me. I have to go. Somewhere there is a crime happening.")
  });

  robot.hear(/(W|w)hat are your (P|p)rime (D|d)irectives?/, function(res) {
  	return res.send("Serve the public trust, protect the innocent, uphold the law.")
  });
}