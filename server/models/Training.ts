import mongoose from 'mongoose'

const attendeeSchema = new mongoose.Schema({
  playerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true
  },
  performanceNotes: {
    type: String,
    required: false
  }
}, { _id: false })

const trainingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    description: 'Training date'
  },
  duration: {
    type: Number,
    required: false,
    description: 'Duration in minutes'
  },
  skillsWorkedOn: {
    type: [String],
    required: true,
    enum: ['serving', 'passing', 'setting', 'spiking', 'blocking', 'digging', 'physical', 'tactics'],
    description: 'Skills practiced during training'
  },
  attendees: {
    type: [attendeeSchema],
    required: false,
    description: 'Players who attended'
  },
  generalNotes: {
    type: String,
    required: false,
    description: 'Overall notes about the training'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

// Create index for efficient queries
trainingSchema.index({ date: -1 })

export const Training = mongoose.models.Training || mongoose.model('Training', trainingSchema)
