import "express-async-errors";
import { Application, json, NextFunction, Request, Response } from "express";
import cors from "cors";
import { AppError } from "./error";
import bodyParser from "body-parser";
import { indexRoutes } from "../routes";
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
    this.app.use(
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
      },
    );
    // app.use(bodyParser.json({ limit: "10mb" }));
    // app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
  }
}
// export default function Middleware(app: Application): void {
//   app.use(
//     cors({
//       origin: "*",
//     }),
//   );
//   app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
//   });
//   app.use(json());
//   app.use(
//     (err: Error, request: Request, response: Response, next: NextFunction) => {
//       if (err instanceof AppError) {
//         return response.status(err.statusCode).json({
//           status: "error",
//           message: err.message,
//         });
//       }

//       return response.status(500).json({
//         status: "error",
//         message: `Internal server error - ${err.message}`,
//       });
//     },
//   );
//   // app.use(bodyParser.json({ limit: "10mb" }));
//   // app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
// }
