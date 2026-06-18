import { useState } from "react";
import { PageTransition, FadeIn } from "@/components/layout/PageTransition";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Heart, Expand, ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  { src: "/gallery-1.png", category: "Hair" },
  { src: "/gallery-2.png", category: "Makeup" },
  { src: "/instagram-1.png", category: "Hair" },
  { src: "/instagram-2.png", category: "Nails" },
];

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + images.length) % images.length);
    }
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-24 md:pb-32 bg-card relative">
        <div className="container mx-auto px-4 text-center max-w-[1000px]">
          <FadeIn>
            <p className="font-sans font-medium uppercase tracking-[0.2em] text-primary text-sm mb-4">Portfolio</p>
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Gallery</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              A curated collection of our favorite transformations. Witness the artistry of Sarte Salon.
            </p>
          </FadeIn>
        </div>
        <div className="divider-rose absolute bottom-0 left-0" />
      </section>

      <section className="py-24 md:py-32 bg-background relative">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl bg-card border border-border"
                onClick={() => setSelectedIdx(i)}
              >
                <div className="aspect-[4/5] w-full">
                  <img src={img.src} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    <Expand className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedIdx !== null} onOpenChange={(open) => !open && setSelectedIdx(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-5xl h-[90vh] bg-transparent border-none shadow-none p-0 flex items-center justify-center">
          {selectedIdx !== null && (
            <div className="relative w-full h-full flex items-center justify-center">
              <img src={images[selectedIdx].src} alt="Enlarged" className="max-w-full max-h-full object-contain rounded-md shadow-2xl" />
              
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedIdx(null); }}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/50 backdrop-blur border border-primary/50 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all z-50"
              >
                <X className="w-6 h-6" />
              </button>

              <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/50 backdrop-blur border border-primary/50 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/50 backdrop-blur border border-primary/50 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </PageTransition>
  );
}
