import "reflect-metadata";

import express, { Application } from "express";
import path from "path";

import {router} from "./routes/healthchecker";
import { scriptRoutes } from "./routes/scriptRoutes";


export const createApp = (): Application => {
  const app = express();
  app.set("port", process.env.PORT || 3000);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
  );

  scriptRoutes(app);
  router(app);
 
  return app;
};