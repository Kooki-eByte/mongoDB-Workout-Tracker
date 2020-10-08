const path = require("path");
const root = path.join(__dirname, "../public");

module.exports = function (app) {
  // Get method used to bring the user to the exercise html page
  app.get("/exercise", (req, res) => {
    res.sendFile(root + "/exercise.html");
  });

  // Get method used to bring the user to the stats html page
  app.get("/stats", (req, res) => {
    res.sendFile(root + "/stats.html");
  });
};
