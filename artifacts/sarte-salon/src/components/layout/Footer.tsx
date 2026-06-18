import { Link } from "wouter";
import { SiInstagram, SiFacebook, SiPinterest, SiTiktok } from "react-icons/si";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-0 pb-10 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="container mx-auto px-4 md:px-6 max-w-[1200px] pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-serif tracking-widest text-foreground inline-block">
              SARTE
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              An ultra-premium beauty destination for discerning clients who treat self-care as an art form.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-transparent hover:text-primary hover:border-primary transition-colors duration-300" data-testid="social-ig">
                <SiInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-transparent hover:text-primary hover:border-primary transition-colors duration-300" data-testid="social-fb">
                <SiFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-transparent hover:text-primary hover:border-primary transition-colors duration-300" data-testid="social-pin">
                <SiPinterest size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-transparent hover:text-primary hover:border-primary transition-colors duration-300" data-testid="social-tiktok">
                <SiTiktok size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl">Explore</h4>
            <ul className="space-y-4">
              {["Home", "Services", "About", "Gallery", "Bridal", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl">Contact</h4>
            <address className="not-italic text-muted-foreground space-y-4">
              <p>123 Luxury Lane<br />Beverly Hills, CA 90210</p>
              <p>
                <a href="tel:+13105550192" className="hover:text-primary transition-colors">+1 (310) 555-0192</a>
              </p>
              <p>
                <a href="mailto:hello@sartesalon.com" className="hover:text-primary transition-colors">hello@sartesalon.com</a>
              </p>
            </address>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl">Newsletter</h4>
            <p className="text-muted-foreground text-sm">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col gap-3" onSubmit={e => e.preventDefault()}>
              <Input type="email" placeholder="Enter your email" className="bg-background border-border focus-visible:ring-primary rounded-none" />
              <Button className="w-full rounded-none bg-background border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors uppercase tracking-widest text-sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="divider-rose mb-8" />
        
        <div className="flex flex-col items-center gap-6 text-sm text-muted-foreground">
          <p className="font-serif italic text-primary text-xl">Est. 2015</p>
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <p>&copy; {new Date().getFullYear()} Sarte Salon. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
