import { Request,Response } from "express";
import { Service } from "typedi";
import { processScript } from "../parser/processScript";


@Service()
class ScriptController {
    constructor( private processScript: processScript ) {}

    async generationScript(req: Request, res: Response){
        const instruction = req.body;
        const script = await this.processScript.generateScript(instruction);
        return res.status(200).json(script)
    }
}

export default ScriptController;