const mongoose = require('mongoose')

const wellnessEventSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('WellnessEvent', wellnessEventSchema)
