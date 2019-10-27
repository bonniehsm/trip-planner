/**
* Module Dependencies
*/

var express = require('express');
var router = express.Router();

var Task = require('./../models/task');


/**
* Task CRUD database operations
*/

/*
* Get all tasks
*/
router.get('/', (req, res) => {
  Task.find((err, task) => {
    if(err) return res.json({ success: false, error: err });
    return res.json({ success: true, task: task });
  });
});

/*
* Create and save a new task
*/
router.post('/createTask', (req, res) => {
  let task = new Task();
  const { name, done, due, priority } = res.body;
  //const id;
  task.name = name;
  task.done = done;
  task.dueDate = due;
  task.priority = priority;
  data.save((err) => {
    if(err) return res.json({ success: false, error: err});
    return res.json({success:true});
  });
});

/*
* Update an existing task
*/
router.post('/updateTask', (req, res) => {
  //get task properties from res

  //Task.findByIdAndUpdate
});

/*
* Delete an existing task
*/
router.delete('/deleteTask', (req, res) => {
  const { id } = res.body;
  Task.findByIdAndRemove(id, (err) => {
    if(err) return res.send(err);
    return res.json({ success: true });
  });
});

module.exports = router;
