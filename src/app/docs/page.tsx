import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Github, Lightbulb, Rocket, Sparkles, Zap } from "lucide-react";

export default function DocsPage() {
    return (
        <div className="container py-8 md:py-12 px-4 mx-auto max-w-4xl">
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Documentation</h1>
                    <p className="text-muted-foreground text-lg">
                        Master the art of prompt engineering and understand how PromptOpt transforms your ideas.
                    </p>
                </div>

                <section className="space-y-4">
                    <div className="flex items-center gap-2 text-xl font-semibold">
                        <Zap className="h-5 w-5 text-primary" />
                        <h2>How to Make Your Prompts Better</h2>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base flex items-center gap-2">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary">1</span>
                                    Provide Context
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                AI works best when it knows its role. Tell the AI who it should be (e.g., "Act as a Senior React Developer") to get more specialized responses.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base flex items-center gap-2">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary">2</span>
                                    Be Specific
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Avoid vague requests. Instead of "Write code for a button", use "Write a reusable Tailwind CSS button component with primary and secondary variants."
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base flex items-center gap-2">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary">3</span>
                                    Define Constraints
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Set boundaries. Mention word counts, specific libraries to use, or formats to avoid. This prevents the AI from going off-track.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base flex items-center gap-2">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary">4</span>
                                    Specify Output Format
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Do you want a table, a list, a code block, or a JSON object? Explicitly stating the format saves time on manual reformatting.
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-2 text-xl font-semibold">
                        <Rocket className="h-5 w-5 text-primary" />
                        <h2>How It Works: Rough to Smart</h2>
                    </div>
                    <Card className="bg-muted/30 border-dashed">
                        <CardContent className="pt-6 text-muted-foreground leading-relaxed">
                            PromptOpt uses the **Gemini 2.5 Flash** model to analyze your input. When you submit a "rough" prompt, our engine:
                            <ul className="list-disc ml-6 mt-4 space-y-2">
                                <li>**Analyzes Intent**: Identifies what you are actually trying to achieve.</li>
                                <li>**Applies Best Practices**: Wraps your intent in professional prompt engineering patterns (CORC: Context, Objective, React/Response, Constraints).</li>
                                <li>**Category Optimization**: Tailors the structure based on your selected category—Coding requires technical depth, while Blogging needs engagement and SEO focus.</li>
                                <li>**Removes Ambiguity**: Replaces weak verbs and vague terms with clear, actionable directives.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-2 text-xl font-semibold">
                        <Lightbulb className="h-5 w-5 text-primary" />
                        <h2>Deep Thoughts on Prompting</h2>
                    </div>
                    <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground space-y-4">
                        <p>
                            Many believe that as AI models get smarter, "prompt engineering" will become obsolete. I believe the opposite. As models become more capable, the "delta" between a generic prompt and a perfectly engineered one only grows larger.
                        </p>
                        <p>
                            Think of a prompt not as a set of instructions, but as a **high-dimensional coordinate** in the model's latent space. A better prompt moves you closer to the exact "knowledge cluster" you need.
                        </p>
                        <p>
                            The most effective prompt engineers aren't just good writers—they are systems thinkers who understand how to structure information for maximum computational clarity.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-2 text-xl font-semibold">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <h2>Contribute</h2>
                    </div>
                    <Card className="border-primary/20 bg-primary/5">
                        <CardHeader>
                            <CardTitle className="text-lg">Help us grow</CardTitle>
                            <CardDescription>
                                PromptOpt is open-source. Whether you found a bug or have a feature idea, your contributions are welcome.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-4">
                            <a
                                href="https://github.com/jasminbhesaniyajb/ai-prompt-optimizer/issues/new"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-foreground/90 gap-2"
                            >
                                <Github className="h-4 w-4" />
                                Raise an Issue
                            </a>
                            <a
                                href="https://github.com/jasminbhesaniyajb/ai-prompt-optimizer"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted gap-2"
                            >
                                <Sparkles className="h-4 w-4" />
                                View Repository
                            </a>
                        </CardContent>
                    </Card>
                </section>

                <div className="pt-8 border-t">
                    <div className="flex flex-col items-center justify-center text-center space-y-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Sparkles className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold">Ready to start optimising?</h3>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Head back to the home page and try applying these principles to your first rough prompt.
                        </p>
                        <a href="/" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                            Go to Home
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
