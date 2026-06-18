import { PageTransition, FadeIn } from "@/components/layout/PageTransition";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <PageTransition>
      <section className="pt-32 pb-24 md:pb-32 bg-background relative">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <FadeIn className="text-center mb-20">
            <p className="font-sans font-medium uppercase tracking-[0.2em] text-primary text-sm mb-4">Get in touch</p>
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Have a question or need assistance? We are here to help you design your perfect salon experience.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: MapPin, title: "Location", lines: ["123 Luxury Lane", "Beverly Hills, CA 90210"] },
                  { icon: Phone, title: "Phone", lines: ["+1 (310) 555-0192"] },
                  { icon: Mail, title: "Email", lines: ["hello@sartesalon.com"] },
                  { icon: Clock, title: "Hours", lines: ["Mon-Sat: 9am - 7pm", "Sun: 10am - 5pm"] }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="space-y-5 bg-card/50 glassmorphism p-8 border border-primary/10 rounded-xl hover:border-primary/30 transition-colors"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <item.icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <h3 className="font-serif text-2xl">{item.title}</h3>
                    <div className="text-muted-foreground space-y-1">
                      {item.lines.map((line, j) => <p key={j}>{line}</p>)}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <FadeIn delay={0.4}>
                <div className="w-full h-80 rounded-2xl border border-primary/30 flex items-center justify-center relative overflow-hidden bg-card">
                  <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <MapPin className="w-10 h-10 text-primary mx-auto opacity-50" />
                      <span className="font-serif text-muted-foreground italic text-lg block">Interactive Map</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} className="h-full">
              <div className="bg-card border border-border p-10 md:p-12 rounded-xl h-full flex flex-col premium-card">
                <h3 className="font-serif text-4xl mb-8">Send a Message</h3>
                <form className="space-y-8 flex-1 flex flex-col" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-3">
                    <label className="text-xs font-semibold tracking-widest uppercase text-foreground/70">Name</label>
                    <Input className="bg-[hsl(0_0%_15%)] border-border h-14 rounded-none focus-visible:ring-primary text-foreground" placeholder="Your Name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-semibold tracking-widest uppercase text-foreground/70">Email</label>
                    <Input type="email" className="bg-[hsl(0_0%_15%)] border-border h-14 rounded-none focus-visible:ring-primary text-foreground" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <label className="text-xs font-semibold tracking-widest uppercase text-foreground/70">Message</label>
                    <Textarea className="bg-[hsl(0_0%_15%)] border-border min-h-[200px] rounded-none focus-visible:ring-primary text-foreground resize-none p-4" placeholder="How can we help?" />
                  </div>
                  <Button className="w-full bg-rose-gradient border-0 text-primary-foreground hover:opacity-90 py-7 uppercase tracking-widest text-sm rounded-none mt-auto min-h-[48px] rose-glow hover:rose-glow-hover transition-all">
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
