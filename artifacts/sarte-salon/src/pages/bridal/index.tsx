import { PageTransition, FadeIn } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Bridal() {
  return (
    <PageTransition>
      <section className="pt-32 pb-24 md:pb-32 bg-card relative">
        <div className="container mx-auto px-4 text-center max-w-[1000px]">
          <FadeIn>
            <p className="font-sans font-medium uppercase tracking-[0.2em] text-primary text-sm mb-4">Sarte Bridal</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6">Your Perfect Wedding Look</h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Breathtaking beauty for your most unforgettable day. Walk down the aisle with confidence, elegance, and a look tailored perfectly to your vision.
            </p>
          </FadeIn>
        </div>
        <div className="divider-rose absolute bottom-0 left-0" />
      </section>

      <section className="py-24 md:py-32 bg-background relative">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {[
              {
                name: "Classic Bride",
                price: "$495",
                desc: "The essentials for a flawless bridal look.",
                features: ["Bridal Hair Styling", "Bridal Makeup Application", "One Trial Session", "Complimentary Lashes"],
                popular: false
              },
              {
                name: "Luxe Bride",
                price: "$895",
                desc: "A comprehensive preparation experience.",
                features: ["Hair & Makeup Styling", "Two Trial Sessions", "Skin Prep Express Facial", "Gel Manicure & Pedicure", "Premium Touch-up Kit"],
                popular: true
              },
              {
                name: "Elite Bridal Suite",
                price: "$1,495",
                desc: "The ultimate VIP salon experience.",
                features: ["Full Day VIP Suite Access", "Hair & Makeup for Bride + 3", "Unlimited Trials", "Champagne Service", "Premium Skin Prep & Nails", "On-site Touch-ups (2 hrs)"],
                popular: false
              }
            ].map((pkg, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`premium-card h-full flex flex-col text-center relative ${pkg.popular ? "border-primary/50 shadow-2xl scale-100 lg:scale-105 z-10" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-gradient text-primary-foreground text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className="absolute top-0 left-0 w-full h-1 bg-rose-gradient opacity-100" />
                <h3 className="font-serif text-3xl md:text-4xl mb-4 mt-4">{pkg.name}</h3>
                <p className="text-primary font-serif font-semibold text-3xl mb-6">{pkg.price}</p>
                <p className="text-muted-foreground mb-8 pb-8 border-b border-border text-lg">{pkg.desc}</p>
                <ul className="space-y-6 mb-12 flex-1 text-left">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-4">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full shrink-0">
                        <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-foreground leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/book?package=${encodeURIComponent(pkg.name)}`} className="w-full mt-auto">
                  <Button className={`w-full tracking-widest uppercase text-sm py-6 rounded-none min-h-[48px] ${pkg.popular ? "bg-primary text-primary-foreground hover:bg-primary/90 border-0" : "bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`}>
                    Inquire Now
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
