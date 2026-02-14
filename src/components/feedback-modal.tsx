"use client"

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import * as Dialog from "@radix-ui/react-dialog";
import { MessageSquare, Send, X } from "lucide-react";
import { useState } from "react";

export function FeedbackModal() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type: "Suggestion",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const githubUser = "jasminbhesaniyajb";
        const repoName = "ai-prompt-optimizer";
        const title = encodeURIComponent(`[${formData.type}] Feedback from ${formData.name || "User"}`);
        const body = encodeURIComponent(`
**Feedback Type:** ${formData.type}
**User:** ${formData.name || "Anonymous"} 
**Email:** ${formData.email || "Not provided"}

**Message:**
${formData.message}

---
Sent via PromptOpt Feedback Tool
    `.trim());

        const githubUrl = `https://github.com/${githubUser}/${repoName}/issues/new?title=${title}&body=${body}`;
        window.open(githubUrl, "_blank");
        setOpen(false);
        setFormData({ name: "", email: "", type: "Suggestion", message: "" });
    };

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <button className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-foreground text-background px-4 py-2.5 rounded-full shadow-2xl hover:scale-105 transition-all active:scale-95 group border-2 border-primary/20">
                    <MessageSquare className="h-5 w-5" />
                    <span className="font-semibold text-sm">Feedback</span>
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-md translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <MessageSquare className="h-5 w-5 text-primary" />
                            </div>
                            <Dialog.Title className="text-xl font-bold">Send Feedback</Dialog.Title>
                        </div>
                        <Dialog.Close asChild>
                            <button className="p-1 rounded-full hover:bg-muted transition-colors outline-none">
                                <X className="h-5 w-5" />
                            </button>
                        </Dialog.Close>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-4">
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium">Name (optional)</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full bg-muted/30 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-medium">Email (optional)</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-muted/30 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-medium">Feedback Type</label>
                                <select
                                    className="w-full bg-muted/30 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all cursor-pointer"
                                    value={formData.type}
                                    onChange={e => setFormData({ ...formData, type: e.target.value })}
                                >
                                    <option value="Bug">🐛 Bug Report</option>
                                    <option value="Suggestion">💡 Suggestion</option>
                                    <option value="Praise">❤️ Praise</option>
                                    <option value="Other">❓ Other</option>
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-medium">Message *</label>
                                <Textarea
                                    required
                                    placeholder="Tell us what you think..."
                                    className="min-h-[120px] bg-muted/30 resize-none"
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-full gap-2 py-6 text-base font-semibold shadow-lg">
                            <Send className="h-4 w-4" />
                            Send Feedback
                        </Button>

                        <p className="text-[11px] text-center text-muted-foreground pt-1">
                            We read every message. Thank you for helping us improve!
                        </p>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
