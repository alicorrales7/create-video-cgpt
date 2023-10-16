export interface GptRequest {
    prompt: string;
    max_tokens: number;
  }
  
  export interface GptResponse {
    choices: Array<{ text: string }>;
  }