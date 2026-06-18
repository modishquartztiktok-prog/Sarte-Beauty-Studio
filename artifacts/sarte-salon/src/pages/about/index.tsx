import { PageTransition, FadeIn } from "@/components/layout/PageTransition";
import { Heart, Sparkles, Star, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <PageTransition>
      <section className="pt-32 pb-24 md:pb-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-[1000px] text-center relative z-10">
          <FadeIn>
            <p className="font-sans font-medium uppercase tracking-[0.2em] text-primary text-sm mb-6">Our Story</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-10 leading-tight">The Art of Transformation</h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Founded in 2015, Sarte Salon was born from a passion for artistry and uncompromising luxury. The name 'Sarte' embodies our core belief: that true beauty is an art form, and every client is a masterpiece waiting to be revealed. We created a sanctuary where ordinary moments become transformative experiences.
            </p>
          </FadeIn>
        </div>
        <div className="divider-rose absolute bottom-0 left-0" />
      </section>

      <section className="py-24 md:py-32 bg-card relative">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              { title: "Artistry", desc: "Every cut, color, and stroke is executed with masterful precision.", icon: Star },
              { title: "Excellence", desc: "We use only the world's most premium, proven beauty products.", icon: Award },
              { title: "Inclusivity", desc: "Luxury is a feeling, and everyone deserves to feel extraordinary.", icon: Heart },
              { title: "Innovation", desc: "Constantly evolving our techniques to bring you modern elegance.", icon: Sparkles },
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="premium-card text-center flex flex-col items-center justify-center h-full"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-3xl mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="divider-rose absolute bottom-0 left-0" />
      </section>

      <section className="py-24 md:py-32 bg-background relative">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <FadeIn className="text-center mb-20">
            <p className="font-sans font-medium uppercase tracking-[0.2em] text-primary text-sm mb-4">The Team</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Meet The Artisans</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Our team of award-winning stylists and beauty professionals.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 max-w-6xl mx-auto">
            {[
              { img: "/team-1.png", name: "Elena Rostova", role: "Master Stylist & Founder", exp: "15+ Years" },
              { img: "/team-2.png", name: "Julian Vance", role: "Color Director", exp: "12+ Years" },
              { img: "/team-3.png", name: "Sofia Chen", role: "Lead Makeup Artist", exp: "8+ Years" },
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 relative border-2 border-transparent group-hover:border-primary transition-all duration-500 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-4 translate-y-4 group-hover:translate-y-0">
                      <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">Specialty</p>
                      <p className="text-foreground text-sm leading-relaxed line-clamp-3 italic">Creating bespoke looks that elevate natural beauty.</p>
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-3xl mb-2">{member.name}</h3>
                <p className="text-primary font-sans italic text-base mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm uppercase tracking-widest">{member.exp} Experience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
