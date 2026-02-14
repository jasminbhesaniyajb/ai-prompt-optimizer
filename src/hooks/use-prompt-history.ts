import { OptimisedResult } from "@/lib/optimiser";
import { useEffect, useState } from "react";

export function usePromptHistory() {
    const [history, setHistory] = useState<OptimisedResult[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("prompt-history");
        if (stored) {
            try {
                setHistory(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse history", e);
            }
        }
    }, []);

    const addToHistory = (result: OptimisedResult) => {
        const newHistory = [result, ...history].slice(0, 50); // Keep last 50
        setHistory(newHistory);
        localStorage.setItem("prompt-history", JSON.stringify(newHistory));
    };

    const clearHistory = () => {
        setHistory([]);
        localStorage.removeItem("prompt-history");
    };

    return { history, addToHistory, clearHistory };
}
