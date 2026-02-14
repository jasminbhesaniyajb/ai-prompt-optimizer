"use server"

import { PromptCategory } from "@/lib/optimiser";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function optimiseAction(prompt: string, category: PromptCategory) {
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
        throw new Error("Missing Google API Key. Please add GOOGLE_GENERATIVE_AI_API_KEY to your .env.local file.");
    }

    if (!prompt.trim()) {
        throw new Error("Prompt cannot be empty.");
    }

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY || "");
    const modelName = "gemini-2.5-flash";
    console.log(`Optimising prompt using model: ${modelName}`);
    const model = genAI.getGenerativeModel({ model: modelName });

    const systemInstruction = `
    Act as an expert Prompt Engineer. Your goal is to beautify, refine, and optimise the user's rough prompt into a high-quality, professional, and effective prompt that can be used in any AI tool (like ChatGPT, Claude, or Gemini).
    
    Category: ${category}
    
    Guidelines:
    - Use clear, descriptive language.
    - Provide structure (Context, Task, Constraints, Output Format).
    - Enhance technical depth if the category is 'Coding' or 'System Design'.
    - Make it engaging if it's 'Marketing' or 'Blogging'.
    - Ensure the final output is ONLY the optimised prompt itself, no conversational filler or explanations.
  `;

    try {
        const result = await model.generateContent([systemInstruction, `User Prompt: ${prompt}`]);
        const response = await result.response;
        return response.text().trim();
    } catch (error: any) {
        console.error("Gemini API Error:", error);
        throw new Error(error.message || "Failed to optimise prompt. Please check your API key and network connection.");
    }
}
