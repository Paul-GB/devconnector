const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// instead of connecting to mongoDB like that mongoose.connect(db)
// use async method and promise as below
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
