import cookieParser from "cookie-parser";
import cors from "cors";
import env from "dotenv";
import express from "express";
import morgan from "morgan";
import dbConnection from "./utils/index.js";

env.config();
dbConnection();

const PORT = process.env.PORT || 8000;
const app = express();
const routes = "";

app.use(
  cors({
    origin: "http://localhost:5000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credetials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded()); //checks if the received data is in Object or String
app.use(cookieParser());

app.use(morgan("dev")); // http req logger

// app.use("/api/v1", routes);

// app.use(routeNotFound);
// app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`listening on: ${PORT}`);
});
