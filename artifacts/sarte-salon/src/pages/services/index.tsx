import { PageTransition, FadeIn } from "@/components/layout/PageTransition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const menuData = [
  {
    category: "Hair Styling",
    items: [
      { name: "Signature Blowout", price: "$45+", duration: "45 mins", desc: "Wash, scalp massage, and classic round brush blowout." },
      { name: "Women's Haircut", price: "$65+", duration: "60 mins", desc: "Consultation, wash, cut, and signature blowout." },
      { name: "Special Event Updo", price: "$95+", duration: "75 mins", desc: "Elegant styling for events. Wash not included." },
      { name: "Brazilian Blowout", price: "$250+", duration: "120 mins", desc: "Smoothing treatment to eliminate frizz for 12 weeks." },
    ]
  },
  {
    category: "Hair Coloring",
    items: [
      { name: "Partial Highlights", price: "$150+", duration: "90 mins", desc: "Strategic dimension for a sun-kissed look." },
      { name: "Custom Balayage", price: "$200+", duration: "150 mins", desc: "Hand-painted highlights for natural, effortless color." },
      { name: "Full Color", price: "$120+", duration: "90 mins", desc: "All-over single process color." },
      { name: "Gloss / Toning", price: "$85+", duration: "45 mins", desc: "Refresh your tone and add intense shine." },
    ]
  },
  {
    category: "Makeup",
    items: [
      { name: "Day Makeup", price: "$85", duration: "45 mins", desc: "Soft, natural enhancement for daytime events." },
      { name: "Evening Glam", price: "$120", duration: "60 mins", desc: "Full glam makeup including contouring and dramatic eyes." },
      { name: "Airbrush Makeup", price: "$150", duration: "75 mins", desc: "Flawless, long-lasting foundation application." },
      { name: "False Lashes", price: "$35", duration: "15 mins", desc: "Strip or cluster lash application." },
    ]
  },
  {
    category: "Nails",
    items: [
      { name: "Classic Manicure", price: "$45", duration: "30 mins", desc: "Shaping, cuticle care, massage, and standard polish." },
      { name: "Gel Manicure", price: "$65", duration: "45 mins", desc: "Long-lasting gel polish with complete cuticle care." },
      { name: "Luxe Pedicure", price: "$75", duration: "60 mins", desc: "Exfoliation, mask, extended massage, and polish." },
      { name: "Custom Nail Art", price: "$30+", duration: "30 mins", desc: "Intricate hand-painted designs or embellishments." },
    ]
  }
];

export default function Services() {
  return (
    <PageTransition>
      <section className="pt-32 pb-24 md:pb-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero.png')] opacity-[0.03] object-cover" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-[1200px]">
          <FadeIn>
            <p className="font-sans font-medium uppercase tracking-[0.2em] text-primary text-sm mb-4">Our Menu</p>
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Service Menu</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our curated menu of luxury beauty treatments. Every service is tailored to your unique features and preferences by our expert artisans.
            </p>
          </FadeIn>
        </div>
        <div className="divider-rose absolute bottom-0 left-0" />
      </section>

      <section className="py-24 md:py-32 bg-background min-h-[60vh] relative">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <Tabs defaultValue="Hair Styling" className="w-full">
            <div className="flex md:justify-center mb-16 overflow-x-auto pb-4 hide-scrollbar w-full border-b border-border">
              <TabsList className="bg-transparent h-auto p-0 flex flex-nowrap gap-6 md:gap-12 min-w-max md:min-w-0">
                {menuData.map((category) => (
                  <TabsTrigger 
                    key={category.category} 
                    value={category.category}
                    className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none px-0 py-4 text-lg md:text-xl font-serif whitespace-nowrap"
                  >
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {menuData.map((category) => (
              <TabsContent key={category.category} value={category.category} className="mt-0">
                <div className="grid gap-6 md:gap-8">
                  {category.items.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex flex-col md:flex-row md:items-center justify-between p-8 border border-border bg-card hover:border-primary/50 transition-all duration-300 group premium-card service-card-accent"
                    >
                      <div className="flex-1 mb-6 md:mb-0">
                        <div className="flex items-baseline justify-between md:justify-start gap-4 mb-3">
                          <h3 className="font-serif text-3xl">{item.name}</h3>
                          <span className="text-primary font-serif font-semibold text-2xl hidden md:inline">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="flex items-center justify-between md:flex-col md:items-end gap-6 md:gap-4 md:pl-8 md:border-l md:border-border">
                        <span className="text-primary font-serif font-semibold text-2xl md:hidden">{item.price}</span>
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{item.duration}</span>
                          <Link href={`/book?service=${encodeURIComponent(item.name)}`}>
                            <Button variant="ghost" className="hover:bg-primary hover:text-primary-foreground text-primary rounded-full transition-all duration-300 uppercase tracking-widest text-xs px-6 py-5 border border-primary/30 min-h-[48px]">
                              Book This
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <FadeIn delay={0.4} className="mt-24 text-center border-t border-primary/20 pt-20">
            <p className="font-sans font-medium uppercase tracking-[0.2em] text-primary text-sm mb-4">Special Occasions</p>
            <h3 className="font-serif text-4xl mb-6">Looking for Bridal Services?</h3>
            <p className="text-muted-foreground mb-10 text-lg">Discover our exclusive bridal packages for your special day.</p>
            <Link href="/bridal">
              <Button className="bg-rose-gradient text-primary-foreground hover:opacity-90 border-0 rounded-full px-10 py-7 uppercase tracking-widest text-sm rose-glow hover:rose-glow-hover transition-all min-h-[48px]">
                View Bridal Packages
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
