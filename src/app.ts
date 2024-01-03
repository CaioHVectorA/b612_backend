import express, { NextFunction, Request, Response, json } from "express";
import { indexRoutes } from "./routes";
import cors from "cors";
import { AppError } from "./config/error";
import { AppFactory } from "./config/defaultConfig";
const port = 9128
export const { app } = new AppFactory(express());
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Listening on port ${port}`))
}