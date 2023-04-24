require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const TaskRoutes = require("./routes/taskRoutes");
const app = express();
app.use(express.json());
app.use("/v1/tasks", TaskRoutes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server is running on " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
