const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3010;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workoutTracker",
  {
    useNewUrlParser: true,
  }
);

// lead to api OR html routes
require("./routes/html-route")(app);
require("./routes/api-route")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
