import mongoose from 'mongoose'

let isConnected = false

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log('Using existing database connection')
    return
  }

  const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/sjl-cerebro'

  try {
    await mongoose.connect(mongoUri)
    isConnected = true
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
}

export const disconnectFromDatabase = async () => {
  if (!isConnected) {
    return
  }

  try {
    await mongoose.disconnect()
    isConnected = false
    console.log('MongoDB disconnected successfully')
  } catch (error) {
    console.error('MongoDB disconnection error:', error)
    throw error
  }
}
