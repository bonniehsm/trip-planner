var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json([
    {
      taskName: "task from backend api",
      done: false,
      dueDate: new Date().toString(),
      priority: false
    }
  ]);
});

module.exports = router;
