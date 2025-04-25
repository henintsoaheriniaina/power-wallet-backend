import cookieParser from "cookie-parser";
import cors from "cors";
import e from "express";
import { errorHandler, notFound } from "./middlewares/errorMiddleware";
import logMiddleware from "./middlewares/logMiddleware";
import authRoutes from "./routes/authRoutes";
import balanceRoutes from "./routes/balanceRoutes";
import transactionsRoutes from "./routes/transactionsRoutes";
import job from "./utils/cron";
const app = e();

app.use(cors());
app.use(e.json());
app.use(cookieParser());

// cron job
job.start();

// log middleware
app.use(logMiddleware);

// auth routes
app.use("/api/auth", authRoutes);

// transactions routes
app.use("/api/transactions", transactionsRoutes);

// balance routes
app.use("/api/balance", balanceRoutes);

// not found
app.use(notFound);

// global error handler
app.use(errorHandler);
export default app;
