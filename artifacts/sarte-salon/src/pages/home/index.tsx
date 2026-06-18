import { Link } from "wouter";
import { motion } from "framer-motion";
import { PageTransition, FadeIn } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Scissors, Sparkles, Heart, Star, Quote } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src="/hero.png" alt="Sarte Salon Interior" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/90 mix-blend-multiply" />
          {/* Subtle noise overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="font-sans font-medium uppercase tracking-[0.2em] text-primary text-sm md:text-base mb-6">
              Welcome to the pinnacle of beauty
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal mb-8 text-foreground shadow-sm">
              Elevate Your Beauty <br />
              <span className="italic text-foreground/90">with</span> Sarte Salon
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-lg"
          >
            <Link href="/book" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:min-w-[200px] bg-rose-gradient text-primary-foreground hover:opacity-90 rounded-full px-8 py-7 text-sm tracking-widest uppercase border-0 rose-glow hover:rose-glow-hover transition-all">
                Book Appointment
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:min-w-[200px] rounded-full px-8 py-7 text-sm tracking-widest uppercase border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-all">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </section>

      {/* Marquee Strip */}
      <div className="w-full bg-card border-y border-primary/20 py-5 overflow-hidden flex whitespace-nowrap relative">
        <div className="animate-marquee flex space-x-8 font-serif text-primary tracking-[0.2em] text-xl uppercase">
          {Array(10).fill("HAIR · MAKEUP · NAILS · SKINCARE · BRIDAL · FACIALS · ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
          {Array(10).fill("HAIR · MAKEUP · NAILS · SKINCARE · BRIDAL · FACIALS · ").map((text, i) => (
            <span key={`dup-${i}`}>{text}</span>
          ))}
        </div>
      </div>

      {/* Intro / Est */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="container mx-auto px-4 md:px-6 max-w-[1200px] text-center max-w-4xl">
          <FadeIn>
            <div className="w-16 h-[2px] bg-primary mx-auto mb-8" />
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
              Where luxury meets artistry, creating <span className="italic text-primary">unforgettable</span> transformations.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Step into our couture atelier and experience self-care reimagined. At Sarte, we believe beauty is personal, powerful, and profound. Let us curate your perfect look.
            </p>
            <div className="inline-flex items-center justify-center border border-primary/30 rounded-full px-8 py-3 text-sm tracking-widest text-primary uppercase bg-primary/5">
              Est. 2015
            </div>
          </FadeIn>
        </div>
        <div className="divider-rose absolute bottom-0 left-0" />
      </section>

      {/* Featured Services */}
      <section className="py-24 md:py-32 bg-card relative">
        <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
          <FadeIn className="text-center mb-16">
            <p className="font-sans font-medium uppercase tracking-[0.2em] text-primary text-sm mb-4">Our Offerings</p>
            <h2 className="font-serif text-4xl md:text-5xl">Signature Services</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              { title: "Bespoke Styling", desc: "Precision cuts and masterful blowouts tailored to your features.", price: "$65+", icon: Scissors },
              { title: "Color Alchemy", desc: "Balayage, highlights, and vivid hues customized for brilliance.", price: "$150+", icon: Sparkles },
              { title: "Bridal Couture", desc: "Flawless hair and makeup for your most important day.", price: "$495+", icon: Heart },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group premium-card service-card-accent flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-3xl mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">{service.desc}</p>
                <div className="w-full flex flex-col items-center gap-4 mt-auto">
                  <span className="font-serif text-2xl font-semibold text-primary">{service.price}</span>
                  <Link href="/book" className="w-full">
                    <Button variant="ghost" className="w-full text-sm uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Link href="/services">
              <Button variant="outline" className="rounded-full px-10 py-7 text-sm tracking-widest uppercase border-primary/30 hover:bg-primary/5 hover:text-primary transition-all">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
        <div className="divider-rose absolute bottom-0 left-0" />
      </section>

      {/* Gallery / Instagram Teaser */}
      <section className="py-24 md:py-32 bg-background overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
          <FadeIn className="text-center mb-16">
            <p className="font-sans font-medium uppercase tracking-[0.2em] text-primary text-sm mb-4">Portfolio</p>
            <h2 className="font-serif text-4xl md:text-5xl">The Sarte Aesthetic</h2>
          </FadeIn>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              "/gallery-1.png", "/instagram-1.png", "/gallery-2.png", "/instagram-2.png"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="aspect-square relative group overflow-hidden bg-card rounded-xl"
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="divider-rose absolute bottom-0 left-0" />
      </section>
      
      {/* Testimonials snippet */}
      <section className="py-24 md:py-32 bg-card relative">
        <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
          <FadeIn className="text-center mb-16">
            <p className="font-sans font-medium uppercase tracking-[0.2em] text-primary text-sm mb-4">Client Love</p>
            <h2 className="font-serif text-4xl md:text-5xl">Words of Praise</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", text: "The most incredible salon experience I've ever had. Elena is a true artist." },
              { name: "Jessica T.", text: "My bridal makeup was flawless and lasted the entire day. Highly recommend the Luxe package." },
              { name: "Amanda L.", text: "I've never felt more confident. The custom balayage completely transformed my look." }
            ].map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative premium-card text-center flex flex-col items-center"
              >
                <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10 rotate-180" />
                <div className="flex gap-1 mb-6 mt-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-primary fill-primary" />)}
                </div>
                <p className="text-muted-foreground italic mb-8 relative z-10">{test.text}</p>
                <span className="mt-auto font-sans text-sm font-semibold tracking-widest text-primary uppercase">{test.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="divider-rose absolute bottom-0 left-0" />
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[url('/hero.png')] opacity-[0.05] mix-blend-screen bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 text-center max-w-[1200px]">
          <FadeIn>
            <h2 className="font-serif text-5xl md:text-7xl mb-8">Ready for Your Transformation?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
              Book your appointment today and experience the luxury of Sarte Salon.
            </p>
            <Link href="/book">
              <Button size="lg" className="bg-rose-gradient text-primary-foreground hover:opacity-90 rounded-full px-12 py-8 text-base tracking-widest uppercase shadow-2xl rose-glow hover:rose-glow-hover transition-all">
                Book Your Appointment
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
