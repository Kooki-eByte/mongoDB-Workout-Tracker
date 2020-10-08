const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: Date,
  exercises: [
    {
      type: {
        type: String,
        required: true,
      },

      name: {
        type: String,
        required: true,
        match: [
          /[a-zA-Z]/,
          "Please enter a valid name. Try taking out any numbers or special characters",
        ],
      },

      duration: {
        type: Number,
        required: true,
        validate: [({ length }) => length >= 0, "Must be more than 0 minutes"],
      },

      weight: {
        type: Number,
        required: true,
        validate: [({ length }) => length >= 0, "Must be more than 0 lbs"],
      },

      reps: {
        type: Number,
        required: true,
        validate: [({ length }) => length >= 0, "Must be more than 0 reps"],
      },

      sets: {
        type: Number,
        required: true,
        validate: [({ length }) => length >= 0, "Must be more than 0 sets"],
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
