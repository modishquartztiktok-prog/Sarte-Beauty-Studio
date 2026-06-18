import { Link } from "wouter";
import { motion } from "framer-motion";
import { PageTransition, FadeIn } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Scissors, Sparkles, Heart, Star, Quote } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hero.png" alt="Sarte Salon Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="font-serif italic text-primary text-xl md:text-2xl mb-4">
              Welcome to the pinnacle of beauty
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-tight mb-8">
              Elevate Your Beauty <br />
              <span className="italic">with</span> Sarte Salon
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link href="/book">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-sm tracking-widest uppercase rose-glow hover:rose-glow-hover transition-all">
                Book Appointment
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-sm tracking-widest uppercase border-foreground/20 hover:bg-foreground/5 transition-all">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Marquee Strip */}
      <div className="w-full bg-card border-y border-border py-4 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex space-x-4 font-serif text-primary tracking-[0.2em] text-lg uppercase"
        >
          {Array(10).fill("HAIR · MAKEUP · NAILS · SKINCARE · BRIDAL · FACIALS · ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      {/* Intro / Est */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeIn>
            <div className="w-16 h-px bg-primary mx-auto mb-8" />
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
              Where luxury meets artistry, creating <span className="italic text-primary">unforgettable</span> transformations.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Step into our couture atelier and experience self-care reimagined. At Sarte, we believe beauty is personal, powerful, and profound. Let us curate your perfect look.
            </p>
            <div className="inline-flex items-center justify-center border border-border rounded-full px-6 py-2 text-sm tracking-widest text-muted-foreground uppercase">
              Est. 2015
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <p className="font-serif italic text-primary text-xl mb-2">Our Offerings</p>
            <h2 className="font-serif text-4xl md:text-5xl">Signature Services</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Bespoke Styling", desc: "Precision cuts and masterful blowouts tailored to your features.", price: "$65+", icon: Scissors },
              { title: "Color Alchemy", desc: "Balayage, highlights, and vivid hues customized for brilliance.", price: "$150+", icon: Sparkles },
              { title: "Bridal Couture", desc: "Flawless hair and makeup for your most important day.", price: "$495+", icon: Heart },
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group bg-background border border-border p-10 hover:border-primary/50 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <service.icon className="w-10 h-10 text-primary mb-6 stroke-1" />
                  <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 flex-1">{service.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-serif text-lg">{service.price}</span>
                    <Link href="/services" className="text-sm uppercase tracking-widest text-primary hover:text-foreground transition-colors group-hover:translate-x-2 duration-300">
                      Discover
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/services">
              <Button variant="outline" className="rounded-full px-8 py-6 text-sm tracking-widest uppercase">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery / Instagram Teaser */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <p className="font-serif italic text-primary text-xl mb-2">Portfolio</p>
            <h2 className="font-serif text-4xl md:text-5xl">The Sarte Aesthetic</h2>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/gallery-1.png", "/instagram-1.png", "/gallery-2.png", "/instagram-2.png"
            ].map((img, i) => (
              <FadeIn key={i} delay={i * 0.1} className="aspect-square relative group overflow-hidden bg-card">
                <img src={img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero.png')] opacity-10 mix-blend-multiply bg-cover bg-center" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-serif text-5xl md:text-6xl mb-8">Ready for Your Transformation?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Book your appointment today and experience the luxury of Sarte Salon.
            </p>
            <Link href="/book">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-full px-10 py-6 text-base tracking-widest uppercase shadow-2xl">
                Book Your Appointment
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
