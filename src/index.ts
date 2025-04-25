import cookieParser from "cookie-parser";
import cors from "cors";
import e, { type Request, type Response } from "express";
import config from "./config/config";
import connectDb from "./db/db";
const app = e();

app.use(cors());
app.use(e.json());
app.use(cookieParser());

app.get("/api", (req: Request, res: Response) => {
  res.send("Server is running");
});
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
