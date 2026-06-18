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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="flex flex-col gap-4 pointer-events-auto"
          >
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform self-end"
              data-testid="floating-whatsapp"
            >
              <SiWhatsapp size={28} />
            </a>

            <Link
              href="/book"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl rose-glow hover:rose-glow-hover transition-all duration-300 uppercase tracking-wider text-sm flex items-center justify-center"
              data-testid="floating-book"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
