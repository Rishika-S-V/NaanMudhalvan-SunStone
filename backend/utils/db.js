import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
  console.log(process.env.MONGODB_URL)
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/eccomerce', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB