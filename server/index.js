import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { errorHandler, routeNotFound } from "./middlewares/errorMiddleware.js";
import routes from "./routes/index.js";
import { dbConnection } from "./utils/index.js";

const PORT = process.env.PORT || 8800;

// Initialize environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Logging in development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Root route
app.get("/", (req, res) => {
  res.json({
    project: "Assign-It API",
    description: "Task Management API",
    author: { name: "Hardik" },
    version: "1.0.0",
    status: "running",
    port: `console.log("Server running on port" ${PORT})`,
  });
});

// API routes
app.use("/api", routes);

// Error handling
app.use(routeNotFound);
app.use(errorHandler);

const handler = async (req, res) => {
  try {
    await dbConnection();
    return app(req, res);
  } catch (error) {
    console.error("Serverless handler error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Local development server
if (process.env.NODE_ENV !== "production") {
  await dbConnection()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error("Database connection failed:", err);
      process.exit(1);
    });
}

export default handler;
