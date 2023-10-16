import { Service } from "typedi";
import axios , { AxiosResponse }  from "axios";
import * as dotenv from 'dotenv';
import { GptResponse } from "../interfaces/gptClient";



dotenv.config()
const link = process.env.API_ENDPOINT as string
const key = process.env.YOUR_API_KEY_HERE

@Service()
export class ScriptService {
    
    
    //To access the ChartGPT API and generate a script
    async generateScript (prompt: string): Promise<string|undefined>{
        console.log(prompt)
        try{
            const response: AxiosResponse<GptResponse> = await axios.post(
                link,{
                prompt,
                max_tokens: 50
            }, {
                headers: {
                    'Authorization': 'Bearer ' + key,
                    'Content-Type': 'application/json'
                }
            });
            return response.data.choices[0]?.text.trim();
            }catch(error){
                if (axios.isAxiosError(error)) {
                    console.error('Axios Error:', error.response?.data || error.message);
                  } else {
                    console.error('Error:', error);
                  }
                  return undefined;
            
            }

        
    
    }
    

}