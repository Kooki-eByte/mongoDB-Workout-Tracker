const path = require("path");
const root = path.join(__dirname, "../public");

module.exports = function (app) {
  // Get method used to find all of the workouts in the Workout collection
  app.get("/exercise", (req, res) => {
    res.sendFile(root + "/exercise.html");
  });
};
