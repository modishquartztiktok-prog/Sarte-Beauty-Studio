import { PageTransition, FadeIn } from "@/components/layout/PageTransition";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <PageTransition>
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a question or need assistance? We are here to help you design your perfect salon experience.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn delay={0.1} className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary mb-6">
                    <MapPin />
                  </div>
                  <h3 className="font-serif text-2xl">Location</h3>
                  <p className="text-muted-foreground">123 Luxury Lane<br/>Beverly Hills, CA 90210</p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary mb-6">
                    <Phone />
                  </div>
                  <h3 className="font-serif text-2xl">Phone</h3>
                  <p className="text-muted-foreground">+1 (310) 555-0192</p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary mb-6">
                    <Mail />
                  </div>
                  <h3 className="font-serif text-2xl">Email</h3>
                  <p className="text-muted-foreground">hello@sartesalon.com</p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary mb-6">
                    <Clock />
                  </div>
                  <h3 className="font-serif text-2xl">Hours</h3>
                  <p className="text-muted-foreground">Mon-Sat: 9am - 7pm<br/>Sun: 10am - 5pm</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-card border border-border flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                  <span className="font-serif text-muted-foreground italic">Interactive Map Area</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-card border border-border p-10">
                <h3 className="font-serif text-3xl mb-8">Send a Message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input className="bg-background border-border" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" className="bg-background border-border" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea className="bg-background border-border min-h-[150px]" placeholder="How can we help?" />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 uppercase tracking-widest text-sm rounded-none">
                    Send Message
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
