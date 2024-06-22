var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  }
});

var Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
