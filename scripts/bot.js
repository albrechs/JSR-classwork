module.exports = function(robot) {
  robot.hear(/Hello!/, function(res) {
    return res.send("Hi there!");
  });

  //robot.hear(/What are your Prime Directives?/, function(res) {
  //	return res.send("Serve the public trust, protect the innocent, uphold the law.")
  //});

  robot.hear(/(W|w)hat are your (P|p)rime (D|d)irectives?/, function(res) {
  	return res.send("Serve the public trust, protect the innocent, uphold the law.")
  });
}