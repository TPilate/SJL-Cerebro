import { connectToDatabase } from '../utils/mongoose'
import { Player } from '../models/Player'
import { SkillHistory } from '../models/SkillHistory'
import { RankHistory } from '../models/RankHistory'
import { Training } from '../models/Training'
import { Tournament } from '../models/Tournament'

export default defineEventHandler(async (event) => {
  try {
    await connectToDatabase()

    // Get collection stats
    const playerCount = await Player.countDocuments()
    const skillHistoryCount = await SkillHistory.countDocuments()
    const rankHistoryCount = await RankHistory.countDocuments()
    const trainingCount = await Training.countDocuments()
    const tournamentCount = await Tournament.countDocuments()

    return {
      status: 'success',
      message: 'All collections are accessible',
      collections: {
        players: {
          count: playerCount,
          indexes: Player.schema.indexes()
        },
        skillHistory: {
          count: skillHistoryCount,
          indexes: SkillHistory.schema.indexes()
        },
        rankHistory: {
          count: rankHistoryCount,
          indexes: RankHistory.schema.indexes()
        },
        trainings: {
          count: trainingCount,
          indexes: Training.schema.indexes()
        },
        tournaments: {
          count: tournamentCount,
          indexes: Tournament.schema.indexes()
        }
      }
    }
  } catch (error) {
    return {
      status: 'error',
      message: 'Failed to access collections',
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
})
