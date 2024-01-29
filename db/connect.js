const mongoose = require('mongoose');

//use to remove mongoose deprication warning
mongoose.set('strictQuery', false); 
const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;

