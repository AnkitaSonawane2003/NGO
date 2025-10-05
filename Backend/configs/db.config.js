const mongoose = require("mongoose");

const ConnectDb = () => {
  const DB_URL = process.env.MONGO_URI; // ✅ get from env
  if (!DB_URL) {
    console.error("❌ MONGO_URI is not set in environment variables");
    process.exit(1);
  }

  mongoose
    .connect(DB_URL, { dbName: "NgoConnect" })
    .then((con) => {
      console.log(`✅ Database Connected : ${con.connection.host}`);
    })
    .catch((err) => {
      console.error("❌ MongoDB connection error:", err);
      process.exit(1);
    });
};

module.exports = { ConnectDb };
