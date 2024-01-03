import "express-async-errors";
import { Application, json, NextFunction, Request, Response } from "express";
import cors from "cors";
import { AppError } from "./error";
import bodyParser from "body-parser";
import { indexRoutes } from "../routes";
import { errorHandling } from "./errorHandling";
export class AppFactory {
  app: Application;
  constructor(app: Application) {
    this.app = app
    this.app.use(
      cors({
        origin: "*",
      }),
    );
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      next();
    });
    this.app.use(json({ limit: '10mb' }));
    this.app.use(indexRoutes)
    this.app.use(errorHandling);
  }
}
