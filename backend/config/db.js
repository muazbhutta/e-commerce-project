const mongoose = require("mongoose");
const env = require("./envConfig");

const connect = async () => {
  try {
    await mongoose.connect(env.URL);
    console.log("Database connection established");
  } catch (error) {
    console.log("Error connecting error: " + error.message);
    process.exit;
  }
};

module.exports = connect;
