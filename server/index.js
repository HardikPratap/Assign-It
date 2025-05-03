import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { errorHandler, routeNotFound } from "./middlewares/errorMiddleware.js";
import routes from "./routes/index.js";
import { dbConnection } from "./utils/index.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json({
    project: "Assign-It API",
    description:
      "This is an API for an Task Management application. It provides endpoints for managing taks, assigning, and users.",
    author: {
      name: "Hardik",
    },
    version: "1.0.0",
  });
});

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));
app.use("/api", routes);

app.use(routeNotFound);
app.use(errorHandler);

const PORT = process.env.PORT;

const StartServer = async () => {
  try {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server listening on ${PORT}`);
    });

    dbConnection();
  } catch (error) {
    console.log(error);
  }
};

StartServer();
