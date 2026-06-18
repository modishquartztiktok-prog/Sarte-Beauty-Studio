import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Bridal", href: "/bridal" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-primary/20 py-4 shadow-sm" : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-[1200px] flex items-center justify-between">
        <Link href="/" className="text-3xl font-serif tracking-widest text-foreground hover:text-primary transition-colors data-[testid='nav-logo']">
          SARTE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm tracking-widest uppercase transition-colors nav-link-hover py-2 ${
                  isActive ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
          <Link href="/book">
            <Button className="bg-rose-gradient text-primary-foreground hover:opacity-90 rounded-full px-8 border-0 rose-glow hover:rose-glow-hover transition-all duration-300" data-testid="nav-book-btn">
              Book Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="nav-mobile-toggle"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-xl border-t border-border p-6 flex flex-col gap-6 animate-in slide-in-from-right-full duration-300 z-40 h-[calc(100dvh-72px)] overflow-y-auto">
          <div className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-2xl font-serif tracking-widest transition-colors ${
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="mt-auto pb-8">
            <Link href="/book">
              <Button className="w-full bg-rose-gradient text-primary-foreground border-0 hover:opacity-90 rounded-full py-6 text-lg tracking-widest uppercase">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
