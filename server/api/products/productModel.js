const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  sculptor: {type: Schema.Types.ObjectId, ref: 'sculptor'},

  dimension: {
    length: {
      type: Number
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  },

  finishedDate: {
    type: Date
  },

  location: {
    type: String
  },

  media: [{
    name: {
      type: String
    }
  }],

  processingTime: {
    type: String
  },

  story: {
    type: String
  }
})

module.exports = mongoose.model('product', ProductSchema)
