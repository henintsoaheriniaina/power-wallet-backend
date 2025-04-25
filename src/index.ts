import cookieParser from "cookie-parser";
import cors from "cors";
import e from "express";
import config from "./config/config";
import connectDb from "./db/db";
import logMiddleware from "./middlewares/log";
const app = e();

app.use(cors());
app.use(e.json());
app.use(cookieParser());
app.use(logMiddleware);

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
