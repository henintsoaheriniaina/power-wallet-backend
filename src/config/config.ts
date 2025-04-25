import dotenv from "dotenv";
dotenv.config();

interface Config {
  nodeEnv: string;
  port: number;
  mongoUri: string;
  jwtSecret: string;
}

const config: Config = {
  nodeEnv: process.env.NODE_ENV ? process.env.NODE_ENV : "development",
  port: process.env.PORT ? Number(process.env.PORT) : 8000,
  mongoUri: process.env.MONGO_URI
    ? process.env.MONGO_URI
    : "mongodb://localhost:27017/powerwallet",
  jwtSecret: process.env.JWT_SECRET ? process.env.JWT_SECRET : "1234",
};

export default config;
