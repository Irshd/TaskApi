const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTaskByID,
  createTask,
  deleteTaskByID,
  editTasksByID,
  createBulkTasks,
  deleteBulkTasks,
} = require("../controllers/tasksContollers");
//get all tasks
router.get("/", getAllTasks);
router.get("/:id", getTaskByID);
router.post("/", createTask);
router.delete("/:id", deleteTaskByID);
router.patch("/:id", editTasksByID);
router.post("/bulk", createBulkTasks);
router.delete("/bulk", deleteBulkTasks);

module.exports = router;
