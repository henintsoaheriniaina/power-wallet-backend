import cookieParser from "cookie-parser";
import cors from "cors";
import e from "express";
import logMiddleware from "./middlewares/log";
const app = e();

app.use(cors());
app.use(e.json());
app.use(cookieParser());
app.use(logMiddleware);
export default app;
