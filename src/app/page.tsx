"use client"

import { optimiseAction } from "@/app/actions/optimise-action";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { usePromptHistory } from "@/hooks/use-prompt-history";
import { PromptCategory } from "@/lib/optimiser";
import { Check, Copy, History, Sparkles, Trash2 } from "lucide-react";
import { useState } from "react";

const categories: PromptCategory[] = ["General", "Coding", "Blogging", "Marketing", "System Design"];

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [category, setCategory] = useState<PromptCategory>("General");
  const [result, setResult] = useState<string>("");
  const [isOptimising, setIsOptimising] = useState(false);
  const [copied, setCopied] = useState(false);
  const { history, addToHistory, clearHistory } = usePromptHistory();

  const [error, setError] = useState<string | null>(null);

  const handleOptimise = async () => {
    if (!prompt.trim()) return;
    setIsOptimising(true);
    setError(null);

    try {
      const optimised = await optimiseAction(prompt, category);
      setResult(optimised);

      addToHistory({
        original: prompt,
        optimised: optimised,
        category,
        timestamp: Date.now()
      });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsOptimising(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container py-8 md:py-12 px-4 mx-auto max-w-6xl">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-2 border-primary/10 shadow-lg">
            <CardHeader>
              <CardTitle>Optimise Your Prompt</CardTitle>
              <CardDescription>
                Enter your rough prompt and select a category for better results.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={category === cat ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCategory(cat)}
                      className="rounded-full"
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Prompt</label>
                <Textarea
                  placeholder="E.g. Write a python script to scrape a website..."
                  className="min-h-[150px] resize-none focus:ring-primary/20"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
                {error && (
                  <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
                    {error}
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="justify-end px-6 pb-6">
              <Button
                onClick={handleOptimise}
                disabled={isOptimising || !prompt.trim()}
                className="gap-2 px-8"
              >
                {isOptimising ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Optimising...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Optimise Prompt
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          {result && (
            <Card className="border-2 border-primary/20 shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4">
              <CardHeader className="bg-primary/5 flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle className="text-lg">Optimised Result</CardTitle>
                  <CardDescription>Ready to use in any AI model.</CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 gap-2"
                  onClick={() => copyToClipboard(result)}
                >
                  {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied" : "Copy"}
                </Button>
              </CardHeader>
              <CardContent className="p-6">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90 font-mono bg-muted/30 p-4 rounded-lg border">
                  {result}
                </pre>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-0.5">
                <CardTitle className="text-lg">History</CardTitle>
                <CardDescription>Your recent prompts</CardDescription>
              </div>
              {history.length > 0 && (
                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10" onClick={clearHistory}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </CardHeader>
            <CardContent className="px-2">
              {history.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                  <History className="h-8 w-8 mb-2 opacity-20" />
                  <p className="text-sm">No history yet</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {history.map((item) => (
                    <button
                      key={item.timestamp}
                      onClick={() => {
                        setPrompt(item.original);
                        setResult(item.optimised);
                        setCategory(item.category);
                      }}
                      className="w-full text-left p-3 rounded-lg hover:bg-accent group transition-colors flex items-start gap-3"
                    >
                      <div className="mt-1 p-1 bg-primary/10 rounded group-hover:bg-primary/20 transition-colors">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p className="text-sm font-medium truncate">{item.original}</p>
                        <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">{item.category}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
