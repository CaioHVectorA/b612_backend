import "express-async-errors";
import { Application, json, NextFunction, Request, Response } from "express";
import cors from "cors";
import { AppError } from "./error";
export default function Middleware(app: Application): void {
  app.use(cors());
  app.use(json());
  app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          status: "error",
          message: err.message,
        });
      }

      return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
      });
    }
  );
}
