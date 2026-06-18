import { useState } from "react";
import { PageTransition, FadeIn } from "@/components/layout/PageTransition";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const images = [
  { src: "/gallery-1.png", category: "Hair" },
  { src: "/gallery-2.png", category: "Makeup" },
  { src: "/instagram-1.png", category: "Hair" },
  { src: "/instagram-2.png", category: "Nails" },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Portfolio</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A curated collection of our favorite transformations. Witness the artistry of Sarte Salon.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-32 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.map((img, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div 
                  className="relative group cursor-pointer aspect-square overflow-hidden bg-card border border-border"
                  onClick={() => setSelectedImg(img.src)}
                >
                  <img src={img.src} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <span className="font-serif text-xl text-foreground tracking-widest">@sartesalon</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImg} onOpenChange={() => setSelectedImg(null)}>
        <DialogContent className="max-w-4xl bg-transparent border-none shadow-none p-0">
          {selectedImg && (
            <img src={selectedImg} alt="Enlarged" className="w-full h-auto max-h-[85vh] object-contain rounded-md" />
          )}
        </DialogContent>
      </Dialog>
    </PageTransition>
  );
}
