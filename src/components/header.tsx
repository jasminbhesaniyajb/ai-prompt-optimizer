"use client"

import { Button } from "@/components/ui/button";
import { Github, Sparkles } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-6xl">
                <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                    <div className="bg-primary p-1.5 rounded-lg">
                        <Sparkles className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h1 className="text-xl font-bold tracking-tight">PromptOpt</h1>
                </Link>
                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex items-center gap-6 mr-4">
                        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
                        <Link href="/docs" className="text-sm font-medium hover:text-primary transition-colors">Docs</Link>
                    </nav>
                    <a href="https://github.com/jasminbhesaniyajb/ai-prompt-optimizer" target="_blank" rel="noreferrer" className="sm:hidden">
                        <Button variant="ghost" size="icon">
                            <Github className="h-5 w-5" />
                        </Button>
                    </a>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
