import { Request, Response, NextFunction } from "express";
import { AppError } from "./error";

export const errorHandling = (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
      trace: err.stack
    });
  }