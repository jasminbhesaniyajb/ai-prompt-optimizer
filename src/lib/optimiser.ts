export type PromptCategory = "Coding" | "Blogging" | "Marketing" | "System Design" | "General";

export interface OptimisedResult {
    original: string;
    optimised: string;
    category: PromptCategory;
    timestamp: number;
}

export function optimisePrompt(prompt: string, category: PromptCategory): string {
    if (!prompt.trim()) return "";

    let optimised = prompt.trim();

    // Common enhancements
    const commonPrefix = "Act as an expert in relevant field. ";
    const commonSuffix = "\n\nPlease provide a detailed, structured, and clear response.";

    // Category specific rules
    switch (category) {
        case "Coding":
            optimised = `Act as a senior software engineer. Optimise the following request for clarity and technical depth: "${prompt}". \n\nFocus on best practices, clean code, and edge cases. Include comments and explanations where necessary.`;
            break;
        case "Blogging":
            optimised = `Act as a professional content creator and SEO expert. Transform this rough idea into a compelling blog post prompt: "${prompt}". \n\nEnsure a conversational tone, engaging headers, and clear calls to action.`;
            break;
        case "Marketing":
            optimised = `Act as a direct response copywriter. Improve this marketing prompt for maximum conversion: "${prompt}". \n\nFocus on pain points, benefits, and a strong value proposition.`;
            break;
        case "System Design":
            optimised = `Act as a senior technical architect. Enhance this system design query: "${prompt}". \n\nBreak it down into components, scalability considerations, database choices, and trade-offs.`;
            break;
        default:
            optimised = commonPrefix + optimised + commonSuffix;
    }

    return optimised;
}
