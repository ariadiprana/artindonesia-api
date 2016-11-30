const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var SculptorSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  DOB: {
    type: Date
  },
  medias: [{
    name: {
      type: String
    }
  }],
  residence: {
    type: String
  },
  awards: [{
    name: {
      type: String
    },
    year: {
      type: Number
    }
  }],
  story: {
    type: String
  },
  artstream: [{
    name: {
      type: String
    }
  }]
})

module.exports = mongoose.model('sculptor', SculptorSchema)
