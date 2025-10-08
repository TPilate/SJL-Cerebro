import mongoose from 'mongoose'

const technicalSkillsSchema = new mongoose.Schema({
  serving: { type: Number, min: 1, max: 10 },
  passing: { type: Number, min: 1, max: 10 },
  setting: { type: Number, min: 1, max: 10 },
  spiking: { type: Number, min: 1, max: 10 },
  blocking: { type: Number, min: 1, max: 10 },
  digging: { type: Number, min: 1, max: 10 }
}, { _id: false })

const physicalAttributesSchema = new mongoose.Schema({
  height: { type: Number },
  jumpHeight: { type: Number },
  speed: { type: Number, min: 1, max: 10 }
}, { _id: false })

const skillHistorySchema = new mongoose.Schema({
  playerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
    description: 'Reference to player'
  },
  date: {
    type: Date,
    required: true,
    description: 'When this assessment was made'
  },
  technicalSkills: {
    type: technicalSkillsSchema,
    required: true
  },
  physicalAttributes: {
    type: physicalAttributesSchema,
    required: false
  },
  overallSkill: {
    type: Number,
    required: false
  },
  notes: {
    type: String,
    required: false
  }
})

// Create index for efficient queries
skillHistorySchema.index({ playerId: 1, date: -1 })

export const SkillHistory = mongoose.models.SkillHistory || mongoose.model('SkillHistory', skillHistorySchema)
