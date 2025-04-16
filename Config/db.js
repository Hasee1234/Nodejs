const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        console.log("DB_URI",process.env.DB_URI);
        
      await mongoose.connect(process.env.DB_URI); // No need for deprecated options
      console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
      console.error("❌ MongoDB Connection Failed:", error);
      process.exit(1);
    }
  };
  module.exports=connectDB;