import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    // Initially check in case page is loaded scrolled down
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            className="flex flex-col gap-4 pointer-events-auto"
          >
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform self-end"
              data-testid="floating-whatsapp"
            >
              <SiWhatsapp size={32} />
            </a>

            <Link
              href="/book"
              className="bg-rose-gradient text-primary-foreground px-6 py-4 rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm flex items-center justify-center relative overflow-hidden"
              data-testid="floating-book"
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 rounded-full animate-pulse opacity-50" style={{ boxShadow: "0 0 20px 5px hsl(15 45% 72%)" }} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
