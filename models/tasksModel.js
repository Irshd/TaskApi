const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TaskSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    is_completed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Task", TaskSchema);
