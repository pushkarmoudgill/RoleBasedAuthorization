const mongoose = require('mongoose');
require("dotenv").config();

// Replace with your actual MongoDB connection string
const MONGODB_URI = process.env.CONNECTION_STRING;

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
      // useCreateIndex: true, // Deprecated in newer versions
      // useFindAndModify: false, // Deprecated in newer versions
    });
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    // Exit process with failure
    process.exit(1);
  }
}

module.exports = connectDB;