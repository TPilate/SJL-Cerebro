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
  height: { type: Number, description: 'Height in cm' },
  jumpHeight: { type: Number, description: 'Vertical jump in cm' },
  speed: { type: Number, min: 1, max: 10, description: 'Speed rating 1-10' }
}, { _id: false })

const trainingStatsSchema = new mongoose.Schema({
  totalTrainings: { type: Number, min: 0, default: 0 },
  currentStreak: { type: Number, min: 0, default: 0 },
  lastTrainingDate: { type: Date }
}, { _id: false })

const playerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    description: 'Player\'s first name'
  },
  lastName: {
    type: String,
    required: true,
    description: 'Player\'s last name'
  },
  dateOfBirth: {
    type: Date,
    required: false,
    description: 'Player\'s date of birth'
  },
  position: {
    type: String,
    enum: ['setter', 'libero', 'outside_hitter', 'middle_blocker', 'opposite', 'defensive_specialist', null],
    required: false,
    description: 'Player\'s primary position'
  },
  startDate: {
    type: Date,
    required: true,
    description: 'When the player started playing'
  },
  rank: {
    type: String,
    enum: ['bronze', 'silver', 'gold'],
    required: true,
    description: 'Current rank assigned by coach'
  },
  technicalSkills: {
    type: technicalSkillsSchema,
    required: false
  },
  physicalAttributes: {
    type: physicalAttributesSchema,
    required: false
  },
  overallSkill: {
    type: Number,
    required: false,
    description: 'Calculated average of all technical skills'
  },
  trainingStats: {
    type: trainingStatsSchema,
    required: false
  },
  notes: {
    type: String,
    required: false,
    description: 'General notes about the player'
  }
}, {
  timestamps: true
})

// Create indexes for performance
playerSchema.index({ lastName: 1, firstName: 1 })
playerSchema.index({ rank: 1 })
playerSchema.index({ overallSkill: -1 })
playerSchema.index({ 'trainingStats.totalTrainings': -1 })

export const Player = mongoose.models.Player || mongoose.model('Player', playerSchema)
