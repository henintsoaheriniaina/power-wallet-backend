import cookieParser from "cookie-parser";
import cors from "cors";
import e from "express";
import { errorHandler, notFound } from "./middlewares/errorMiddleware";
import logMiddleware from "./middlewares/logMiddleware";
import userRoutes from "./routes/authRoutes";
const app = e();

app.use(cors());
app.use(e.json());
app.use(cookieParser());

// log middleware
app.use(logMiddleware);

// routes
app.use("/api/auth", userRoutes);

// not found
app.use(notFound);

// global error handler
app.use(errorHandler);
export default app;
