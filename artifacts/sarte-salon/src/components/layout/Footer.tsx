import { Link } from "wouter";
import { SiInstagram, SiFacebook, SiPinterest, SiTiktok } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
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
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" data-testid="social-ig">
                <SiInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" data-testid="social-fb">
                <SiFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" data-testid="social-pin">
                <SiPinterest size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" data-testid="social-tiktok">
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

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl">Hours</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 5:00 PM</span>
              </li>
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
        </div>

        <div className="divider-rose mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sarte Salon. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
