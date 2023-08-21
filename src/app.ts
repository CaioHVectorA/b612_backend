import express from "express";
import Middleware from "./config/defaultConfig";
import { indexRoutes } from "./routes";
import xlsx from 'node-xlsx'
import { existsSync, readFileSync } from "fs";
const app = express();
Middleware(app);
app.use(indexRoutes);
app.listen("9128", () => console.log("Server Running in 9128 PORT!"));