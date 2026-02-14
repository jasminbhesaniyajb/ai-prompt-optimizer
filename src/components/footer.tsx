"use client"

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 mx-auto max-w-6xl">
                <div className="flex flex-col items-center md:items-start gap-1">
                    <p className="text-sm text-muted-foreground">
                        Built by <a href="https://www.linkedin.com/in/jasmin-bhesaniya-2aab611b1/" target="_blank" rel="noreferrer" className="font-medium text-foreground hover:underline inline-flex items-center gap-1.5">
                            Jasmin Bhesaniya
                        </a>
                    </p>
                    <a href="mailto:jasminbhesaniyajb@gmail.com" className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors">
                        <Mail className="h-3 w-3" />
                        jasminbhesaniyajb@gmail.com
                    </a>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground text-center">
                    <span>Open source under MIT License</span>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
                    <a href="https://github.com/jasminbhesaniyajb/ai-prompt-optimizer" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" title="GitHub">
                        <Github className="h-4 w-4" />
                    </a>
                    <a href="https://www.linkedin.com/in/jasmin-bhesaniya-2aab611b1/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" title="LinkedIn">
                        <Linkedin className="h-4 w-4" />
                    </a>
                    <div className="h-4 w-[1px] bg-border mx-1" />
                    <a href="/docs" className="hover:underline">Docs</a>
                    <a href="#" className="hover:underline">Privacy</a>
                </div>
            </div>
        </footer>
    );
}
