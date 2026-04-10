require('dotenv').config();

const mongoose = require('mongoose');
const Task = require('./models/taskmodel');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
  
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());




// Temporary storage

// PUT API 
app.put('/tasks/:id', async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    { completed: req.body.completed },
    { new: true }
  );

  res.json(updatedTask);
});
//post API

app.post('/tasks', async (req, res) => {
  const newTask = new Task(req.body);

  await newTask.save();
  console.log("POST HIT", req.body);

  res.json(newTask);
});

// GET all tasks
app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
//delete API
app.delete('/tasks/:id', async (req, res) => {
  console.log("DELETE HIT", req.params.id); // 👈 ADD THIS

  await Task.findByIdAndDelete(req.params.id);

  res.json({ message: 'Task deleted' });
});