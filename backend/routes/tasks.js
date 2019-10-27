/**
* Module Dependencies
*/

var express = require('express');
var router = express.Router();

var Task = require('./../models/task');


/**
* Model CRUD operations
*/

router.get('/', (req, res) => {
  Task.find((err, task) => {
    if(err) return res.json({ success: false, error: err });
    return res.json({ success: true, task: task });
  })
});

router.post('/createTask', (req, res) => {
  res.render('index', { title: 'tasks/createTask'});
})

router.post('/updateTask', (req, res) => {
  res.render('index', { title: 'tasks/updateTask'});
});

router.delete('/deleteTask', (req, res) => {
  res.render('index', { title: 'tasks/deleteTask'});
});

module.exports = router;
