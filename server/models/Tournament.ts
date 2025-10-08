import mongoose from 'mongoose'

const rankDistributionSchema = new mongoose.Schema({
  bronze: { type: Number, default: 0 },
  silver: { type: Number, default: 0 },
  gold: { type: Number, default: 0 }
}, { _id: false })

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true
  },
  players: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Player',
    required: true
  },
  averageSkill: {
    type: Number,
    required: false
  },
  rankDistribution: {
    type: rankDistributionSchema,
    required: false
  }
}, { _id: false })

const resultSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true
  },
  wins: {
    type: Number,
    default: 0
  },
  losses: {
    type: Number,
    default: 0
  },
  ranking: {
    type: Number,
    required: false
  }
}, { _id: false })

const tournamentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    description: 'Tournament name'
  },
  date: {
    type: Date,
    required: true,
    description: 'Tournament date'
  },
  location: {
    type: String,
    required: false,
    description: 'Tournament location'
  },
  teams: {
    type: [teamSchema],
    required: true,
    description: 'Balanced teams generated for tournament'
  },
  results: {
    type: [resultSchema],
    required: false,
    description: 'Tournament results'
  },
  notes: {
    type: String,
    required: false,
    description: 'General notes about the tournament'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

// Create index for efficient queries
tournamentSchema.index({ date: -1 })

export const Tournament = mongoose.models.Tournament || mongoose.model('Tournament', tournamentSchema)
