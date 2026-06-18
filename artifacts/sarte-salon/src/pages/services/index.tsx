import { PageTransition, FadeIn } from "@/components/layout/PageTransition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

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
      <section className="pt-32 pb-16 bg-card border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Service Menu</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our curated menu of luxury beauty treatments. Every service is tailored to your unique features and preferences by our expert artisans.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-background min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-5xl">
          <Tabs defaultValue="Hair Styling" className="w-full">
            <div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar">
              <TabsList className="bg-transparent h-auto p-0 flex gap-8">
                {menuData.map((category) => (
                  <TabsTrigger 
                    key={category.category} 
                    value={category.category}
                    className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none px-0 py-2 text-lg font-serif"
                  >
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {menuData.map((category) => (
              <TabsContent key={category.category} value={category.category} className="mt-0">
                <div className="grid gap-6">
                  {category.items.map((item, idx) => (
                    <FadeIn key={idx} delay={idx * 0.1}>
                      <div className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-border bg-card hover:border-primary/40 transition-colors group">
                        <div className="flex-1">
                          <div className="flex items-baseline justify-between md:justify-start gap-4 mb-2">
                            <h3 className="font-serif text-2xl">{item.name}</h3>
                            <span className="text-primary font-serif text-xl hidden md:inline">{item.price}</span>
                          </div>
                          <p className="text-muted-foreground mb-4 md:mb-0">{item.desc}</p>
                        </div>
                        <div className="flex items-center justify-between md:flex-col md:items-end gap-4 md:gap-2">
                          <span className="text-primary font-serif text-xl md:hidden">{item.price}</span>
                          <span className="text-sm text-muted-foreground uppercase tracking-widest">{item.duration}</span>
                          <Link href={`/book?service=${encodeURIComponent(item.name)}`}>
                            <Button variant="ghost" className="hover:bg-primary hover:text-primary-foreground text-primary rounded-full transition-all duration-300">
                              Book This
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <FadeIn delay={0.4} className="mt-16 text-center border-t border-border pt-16">
            <h3 className="font-serif text-3xl mb-4">Looking for Bridal Services?</h3>
            <p className="text-muted-foreground mb-8">Discover our exclusive bridal packages for your special day.</p>
            <Link href="/bridal">
              <Button className="bg-primary text-primary-foreground rounded-full px-8 uppercase tracking-widest">
                View Bridal Packages
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
