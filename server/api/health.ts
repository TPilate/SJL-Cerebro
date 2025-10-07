import { connectToDatabase } from '../utils/mongoose'

export default defineEventHandler(async (event) => {
  try {
    await connectToDatabase()
    return {
      status: 'success',
      message: 'MongoDB connection successful'
    }
  } catch (error) {
    return {
      status: 'error',
      message: 'MongoDB connection failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
})
