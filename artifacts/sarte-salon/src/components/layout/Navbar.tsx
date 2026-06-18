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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? "glassmorphism py-4 border-border/50" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="text-3xl font-serif tracking-widest text-foreground hover:text-primary transition-colors data-[testid='nav-logo']">
          SARTE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm tracking-wide uppercase transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-foreground/80"
              }`}
              data-testid={`nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/book">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 rose-glow hover:rose-glow-hover transition-all duration-300" data-testid="nav-book-btn">
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
        <div className="lg:hidden absolute top-full left-0 right-0 glassmorphism border-b border-border p-6 flex flex-col gap-6 animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg uppercase tracking-wide transition-colors ${
                location === link.href ? "text-primary" : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/book">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 mt-4">
              Book Appointment
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
