import { PageTransition, FadeIn } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Bridal() {
  return (
    <PageTransition>
      <section className="pt-32 pb-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <p className="font-serif italic text-primary text-xl mb-4">Sarte Bridal</p>
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Your Perfect Wedding Look</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Breathtaking beauty for your most unforgettable day. Walk down the aisle with confidence, elegance, and a look tailored perfectly to your vision.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Classic Bride",
                price: "$495",
                desc: "The essentials for a flawless bridal look.",
                features: ["Bridal Hair Styling", "Bridal Makeup Application", "One Trial Session", "Complimentary Lashes"]
              },
              {
                name: "Luxe Bride",
                price: "$895",
                desc: "A comprehensive preparation experience.",
                features: ["Hair & Makeup Styling", "Two Trial Sessions", "Skin Prep Express Facial", "Gel Manicure & Pedicure", "Premium Touch-up Kit"]
              },
              {
                name: "Elite Bridal Suite",
                price: "$1,495",
                desc: "The ultimate VIP salon experience.",
                features: ["Full Day VIP Suite Access", "Hair & Makeup for Bride + 3", "Unlimited Trials", "Champagne Service", "Premium Skin Prep & Nails", "On-site Touch-ups (2 hrs)"]
              }
            ].map((pkg, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="border border-border bg-card p-10 h-full flex flex-col hover:border-primary/50 transition-colors relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="font-serif text-3xl mb-2">{pkg.name}</h3>
                  <p className="text-primary font-serif text-2xl mb-4">{pkg.price}</p>
                  <p className="text-muted-foreground mb-8 pb-8 border-b border-border">{pkg.desc}</p>
                  <ul className="space-y-4 mb-8 flex-1">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/book?package=${encodeURIComponent(pkg.name)}`}>
                    <Button className="w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none tracking-widest uppercase text-sm">
                      Inquire Now
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
