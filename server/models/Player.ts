import mongoose from 'mongoose'

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: false
  },
  jerseyNumber: {
    type: Number,
    required: false
  },
  dateOfBirth: {
    type: Date,
    required: false
  },
  joinedDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

export const Player = mongoose.models.Player || mongoose.model('Player', playerSchema)
