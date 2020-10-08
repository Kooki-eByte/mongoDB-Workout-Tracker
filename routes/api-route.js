const db = require("../models");

module.exports = function (app) {
  // Get method used to find all of the workouts in the Workout collection
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/exercise/:id", (req, res) => {
    const workoutId = req.params.id;
  });
};
