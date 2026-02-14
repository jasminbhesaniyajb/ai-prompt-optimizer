import { FeedbackModal } from "@/components/feedback-modal";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Prompt Optimiser | Elevate Your AI Interactions",
  description: "A professional-grade tool for software engineers to optimise, refine, and manage AI prompts for better results across all AI models.",
  keywords: ["AI", "Prompt Engineering", "Next.js", "Open Source", "Software Engineering"],
  authors: [{ name: "Jasmin Bhesaniya" }],
  openGraph: {
    title: "AI Prompt Optimiser",
    description: "Elevate your AI interactions with professionally optimised prompts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary/10`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <FeedbackModal />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
