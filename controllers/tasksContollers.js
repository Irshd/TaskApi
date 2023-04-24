const Task = require("../models/tasksModel");
const mongoose = require("mongoose");
const getAllTasks = async (req, res) => {
  const tasks = await Task.find({}).sort({ createdAt: -1 });
  res.status(200).json(tasks);
};
const getTaskByID = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ id: id });
  if (!task) {
    return res.status(404).json({ error: "There is no task at that id" });
  }
  res.status(200).json(task);
};

const createTask = async (req, res) => {
  const { id, title, is_completed } = req.body;
  try {
    const task = await Task.create({ id, title, is_completed });
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteTaskByID = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndDelete({ id: id });
  if (!task) {
    return res.status(404).json({ error: "There is no task at that id" });
  }
  res.status(200).json(task);
};

const editTasksByID = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndUpdate({ id: id }, { ...req.body });
  if (!task) {
    return res.status(404).json({ error: "There is no task at that id" });
  }
  res.status(200).json(task);
};

const createBulkTasks = async (req, res) => {
  const tasks = req.body;
  try {
    const task = await Task.insertMany(tasks);

    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteBulkTasks = async (req, res) => {
  //   const tasks = req.body;
  //   const tasks = req.body;
  try {
    req.body.tasks.forEach(async (t) => {
      const taskIndex = await Task.findOneAndDelete({ id: t.id });
    });
    res.status(200).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = {
  getAllTasks,
  getTaskByID,
  createTask,
  deleteBulkTasks,
  deleteTaskByID,
  editTasksByID,
  createBulkTasks,
};
