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

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((workoutData) => {
        res.json(workoutData);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // This route is made to creating a new workout, insert it to the database
  app.put("/api/workouts/:id", (req, res) => {
    const workoutId = req.params.id;
    console.log(workoutId);
    console.log(req.body);

    db.Workout.findByIdAndUpdate(workoutId, { $push: { exercises: req.body } })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", ({ body }, res) => {
    console.log(`This is the body ${body}`);
    db.Workout.create(body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
