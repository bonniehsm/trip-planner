/**
* Module Dependencies
*/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
* Task Schema
*/

const taskSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  done: Boolean,
  dueate: {type: Date, default: Date.now },
  priority: Boolean
});

//compile schema into a model
module.exports = mongoose.model('Task', taskSchema);
