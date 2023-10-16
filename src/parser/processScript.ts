import { Service } from "typedi";
import * as dotenv from 'dotenv';
import { ScriptService } from "../services/scriptService";


@Service()
export class  processScript{
    constructor(private scriptService: ScriptService){}

    async generateScript(prompt: string){
         const script = await this.scriptService.generateScript(prompt);
         
            if(typeof script === "string"){

                const scriptFragments = script.split('\n');
            } 
         
         
         return script;
    }

}