const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
  dateAdded: String
});

module.exports = mongoose.model('Task', taskSchema);