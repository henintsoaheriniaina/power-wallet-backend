import cookieParser from "cookie-parser";
import cors from "cors";
import e from "express";
import errorHandler from "./middlewares/error";
import logMiddleware from "./middlewares/log";
const app = e();

app.use(cors());
app.use(e.json());
app.use(cookieParser());

// custom middlewares
app.use(logMiddleware);
app.use(errorHandler);
export default app;
