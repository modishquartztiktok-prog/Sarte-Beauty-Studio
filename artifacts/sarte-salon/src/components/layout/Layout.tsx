import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col selection:bg-primary/30 selection:text-foreground">
      <Navbar />
      <main className="flex-1 w-full relative">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
