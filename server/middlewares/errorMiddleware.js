import { json } from "express";

export const routeNotFound = (req, res, next) => {
  const error = new Error(`Route not found: ${req.originalUrl}`);
  next(error);
};

export const errorHandler = (req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name == "CastError" && err.kind === "ObjectId") {
    statusCode = 400;
    message = "Resourses Not Found";
  }
  req.status(
    statusCode,
    json({
      message: message,
      stack: process.env.NODE_ENV !== "production" ? null : err.stack,
    })
  );
};
