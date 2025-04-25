import app from "./app";
import config from "./config/config";
import connectDb from "./db/db";

const startServer = async () => {
  try {
    await connectDb();
    app.listen(config.port, () => {
      console.log(`Server is running on port: ${config.port}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
};

startServer();
