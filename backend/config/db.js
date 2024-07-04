const mongoose = require("mongoose");

const connection = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(
      `MongoDB connected Successfully: ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(`Error: ${error.message}.red.bold`);
    process.exit();
  }
};

module.exports = connection;
