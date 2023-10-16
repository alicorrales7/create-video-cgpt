import express, { Application, Request, Response } from 'express';
import { Container } from 'typedi';
import ScriptController from '../constrollers/scriptController';

export const scriptRoutes = (app: Application): void => {
    const scriptController = Container.get(ScriptController);

    app.use(express.json());

    app.post('/script', (req: Request, res: Response) => {
        const {prompt} = req.body;

        if (!prompt) {
            return res.status(400).send('Debes proporcionar un prompt.');
          }

          return scriptController.generationScript(req, res);
             
 
    });
}