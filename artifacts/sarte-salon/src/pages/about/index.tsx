import { PageTransition, FadeIn } from "@/components/layout/PageTransition";
import { Heart, Sparkles, Star, Award } from "lucide-react";

export default function About() {
  return (
    <PageTransition>
      <section className="pt-32 pb-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <p className="font-serif italic text-primary text-xl mb-4">Our Story</p>
            <h1 className="font-serif text-5xl md:text-7xl mb-8">The Art of Transformation</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded in 2015, Sarte Salon was born from a passion for artistry and uncompromising luxury. The name 'Sarte' embodies our core belief: that true beauty is an art form, and every client is a masterpiece waiting to be revealed. We created a sanctuary where ordinary moments become transformative experiences.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Artistry", desc: "Every cut, color, and stroke is executed with masterful precision.", icon: Star },
              { title: "Excellence", desc: "We use only the world's most premium, proven beauty products.", icon: Award },
              { title: "Inclusivity", desc: "Luxury is a feeling, and everyone deserves to feel extraordinary.", icon: Heart },
              { title: "Innovation", desc: "Constantly evolving our techniques to bring you modern elegance.", icon: Sparkles },
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 border border-border bg-background text-center h-full">
                  <value.icon className="w-8 h-8 text-primary mx-auto mb-6" />
                  <h3 className="font-serif text-2xl mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Meet The Artisans</h2>
            <p className="text-muted-foreground">Our team of award-winning stylists and beauty professionals.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { img: "/team-1.png", name: "Elena Rostova", role: "Master Stylist & Founder", exp: "15+ Years" },
              { img: "/team-2.png", name: "Julian Vance", role: "Color Director", exp: "12+ Years" },
              { img: "/team-3.png", name: "Sofia Chen", role: "Lead Makeup Artist", exp: "8+ Years" },
            ].map((member, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="group relative overflow-hidden bg-card border border-border">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-serif text-2xl mb-1">{member.name}</h3>
                    <p className="text-primary text-sm uppercase tracking-widest mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.exp} Experience</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
