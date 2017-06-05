module.exports = function(robot) {
  robot.hear(/Hello!/, function(res) {
    return res.send("Hi there!");
  });

  robot.hear(/whattup?/, function(res) {
  	return res.send("not much, you?")
  });
}