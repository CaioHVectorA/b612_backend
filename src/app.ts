import express from "express";
import Middleware from "./config/defaultConfig";
import { indexRoutes } from "./routes";
import { debug,error,fatal,info } from 'veclog'
const port = 9128
export const app = express();
Middleware(app);
app.use(indexRoutes);
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Listening on port ${port}`))
}
// export const server = app.listen("9128", () => console.log("Server Running in 9128 PORT!"));