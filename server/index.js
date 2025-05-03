import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { errorHandler, routeNotFound } from "./middlewares/errorMiddleware.js";
import routes from "./routes/index.js";
import { dbConnection } from "./utils/index.js";

// Initialize environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL?.split(",") || "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
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
  });
});

// API routes
app.use("/api", routes);

// Error handling
app.use(routeNotFound);
app.use(errorHandler);

// Start server function
const startServer = async () => {
  try {
    await dbConnection();
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(
        `Server running in ${
          process.env.NODE_ENV || "development"
        } mode on port ${PORT}`
      );
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

// Determine if running locally or on Vercel
if (process.env.VERCEL_ENV) {
  // Export for Vercel serverless
  module.exports = app;
} else {
  // Start normal server for local development
  startServer();
}
