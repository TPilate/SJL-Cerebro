import mongoose from 'mongoose'

const rankHistorySchema = new mongoose.Schema({
  playerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
    description: 'Reference to player'
  },
  date: {
    type: Date,
    required: true,
    description: 'When the rank change occurred'
  },
  oldRank: {
    type: String,
    enum: ['bronze', 'silver', 'gold', null],
    required: true,
    description: 'Previous rank'
  },
  newRank: {
    type: String,
    enum: ['bronze', 'silver', 'gold'],
    required: true,
    description: 'New rank'
  },
  reason: {
    type: String,
    required: false,
    description: 'Reason for rank change'
  }
})

// Create index for efficient queries
rankHistorySchema.index({ playerId: 1, date: -1 })

export const RankHistory = mongoose.models.RankHistory || mongoose.model('RankHistory', rankHistorySchema)
