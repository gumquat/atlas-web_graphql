const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  weight: Number,
  description: String,
  projectID: String
});

module.exports = mongoose.model('Project', projectSchema);