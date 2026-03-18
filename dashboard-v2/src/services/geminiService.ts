import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getChatResponse(history: { role: string; parts: { text: string }[] }[], prompt: string) {
  const model = ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [...history, { role: "user", parts: [{ text: prompt }] }],
    config: {
      systemInstruction: `You are NairaPulse Oracle, an expert economic advisor for Nigeria. 
      You provide data-driven insights for policymakers and small business owners. 
      Keep responses professional, concise, and focused on the Nigerian economy. 
      Use Markdown for formatting.`,
    },
  });
  
  const response = await model;
  return response.text || "I'm sorry, I couldn't process that request.";
}
