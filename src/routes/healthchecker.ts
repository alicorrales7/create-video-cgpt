import express, { Application, Request, Response, Router } from "express";



export const router = (app: Application):void => {

    app.use(express.json());

    app.get('/', (_req: Request, res: Response) => {
        const healthcheck = {
          uptime: process.uptime(),
          responseTime: process.hrtime(),
          message: 'OK',
          timestamp: Date.now()
        };
      
        try {
          res.send(healthcheck);
        } catch (error) {
          const err: string = error as string;
          healthcheck.message = err;
          res.status(503).send();
        }
      });
}



