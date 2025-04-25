import mongoose from "mongoose";
import config from "../config/config";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(config.mongoUri);
    console.log("Database connected: ", connection.connection.name);
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};
export default connectDb;
