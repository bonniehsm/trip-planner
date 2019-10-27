var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  //res.send('respond with a resource');
  res.json([
    {
      id: "yourObjectId",
      taskName: "task from backend api",
      done: false,
      dueDate: new Date().toString(),
      priority: false
    }
  ]);
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
