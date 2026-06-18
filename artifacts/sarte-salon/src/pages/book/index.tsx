import { useState } from "react";
import { PageTransition, FadeIn } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon, Clock, Star } from "lucide-react";

export default function Book() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-24 md:pb-32 bg-background relative">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Form Side */}
            <FadeIn>
              <p className="font-sans font-medium uppercase tracking-[0.2em] text-primary text-sm mb-4">Reservations</p>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">Request an Appointment</h1>
              <p className="text-muted-foreground mb-10 text-lg">
                Please fill out the details below. Our concierge will contact you shortly to confirm your booking and exact time slot.
              </p>

              {submitted ? (
                <div className="bg-card border border-primary/30 p-12 text-center rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5" />
                  <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-8 relative z-10">
                    <CalendarIcon size={32} />
                  </div>
                  <h3 className="font-serif text-4xl mb-4 relative z-10">Request Received</h3>
                  <p className="text-muted-foreground text-lg relative z-10">
                    Thank you for choosing Sarte Salon. We will be in touch within 24 hours to confirm your appointment.
                  </p>
                </div>
              ) : (
                <div className="glassmorphism p-8 md:p-10 rounded-xl border border-primary/20 relative">
                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-semibold tracking-widest uppercase text-foreground/70">Full Name</label>
                        <Input required className="bg-[hsl(0_0%_15%)] border-border text-foreground focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary rounded-none h-12" placeholder="Jane Doe" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-semibold tracking-widest uppercase text-foreground/70">Phone Number</label>
                        <Input required type="tel" className="bg-[hsl(0_0%_15%)] border-border text-foreground focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary rounded-none h-12" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-semibold tracking-widest uppercase text-foreground/70">Email Address</label>
                      <Input required type="email" className="bg-[hsl(0_0%_15%)] border-border text-foreground focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary rounded-none h-12" placeholder="jane@example.com" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-semibold tracking-widest uppercase text-foreground/70">Service</label>
                        <Select required>
                          <SelectTrigger className="bg-[hsl(0_0%_15%)] border-border text-foreground focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary rounded-none h-12">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border">
                            <SelectItem value="haircut">Signature Blowout</SelectItem>
                            <SelectItem value="color">Custom Balayage</SelectItem>
                            <SelectItem value="makeup">Evening Glam Makeup</SelectItem>
                            <SelectItem value="nails">Gel Manicure</SelectItem>
                            <SelectItem value="bridal">Bridal Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-semibold tracking-widest uppercase text-foreground/70">Preferred Time</label>
                        <Select required>
                          <SelectTrigger className="bg-[hsl(0_0%_15%)] border-border text-foreground focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary rounded-none h-12">
                            <SelectValue placeholder="Select preference" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border">
                            <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12pm - 4pm)</SelectItem>
                            <SelectItem value="evening">Evening (4pm - 8pm)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-semibold tracking-widest uppercase text-foreground/70">Special Notes (Optional)</label>
                      <Textarea className="bg-[hsl(0_0%_15%)] border-border text-foreground min-h-[120px] focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary rounded-none resize-none p-4" placeholder="Tell us about your hair type or desired look..." />
                    </div>

                    <div className="flex items-start gap-4">
                      <Checkbox id="consent" required className="mt-1 border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
                      <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        I understand that this is an appointment request. The salon will contact me to finalize the booking and may require a deposit for certain services.
                      </label>
                    </div>

                    <Button type="submit" className="w-full bg-rose-gradient text-primary-foreground border-0 hover:opacity-90 rounded-none py-7 uppercase tracking-widest text-sm rose-glow hover:rose-glow-hover transition-all min-h-[48px]">
                      Submit Request
                    </Button>
                  </form>
                </div>
              )}
            </FadeIn>

            {/* Info Side */}
            <FadeIn delay={0.2} className="hidden lg:block">
              <div className="h-full relative bg-card border border-border p-12 flex flex-col justify-between overflow-hidden rounded-xl">
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-luminosity">
                  <img src="/hero.png" alt="Salon" className="w-full h-full object-cover grayscale" />
                </div>
                
                <div className="relative z-10 space-y-16">
                  <div>
                    <h3 className="font-serif text-4xl mb-8">Why Book With Us?</h3>
                    <ul className="space-y-6 text-muted-foreground text-lg">
                      <li className="flex gap-4 items-start"><Star className="text-primary shrink-0 w-6 h-6 mt-1 fill-primary" /> Award-winning stylists dedicated to your vision.</li>
                      <li className="flex gap-4 items-start"><Star className="text-primary shrink-0 w-6 h-6 mt-1 fill-primary" /> Premium, clean, and sustainable products.</li>
                      <li className="flex gap-4 items-start"><Star className="text-primary shrink-0 w-6 h-6 mt-1 fill-primary" /> A serene, private atmosphere for ultimate relaxation.</li>
                    </ul>
                  </div>

                  <div className="p-8 border border-border bg-background/80 backdrop-blur-xl rounded-xl">
                    <h4 className="font-serif text-2xl mb-6 flex items-center gap-3">
                      <Clock className="w-6 h-6 text-primary" /> Hours of Operation
                    </h4>
                    <ul className="space-y-4 text-base text-muted-foreground">
                      <li className="flex justify-between items-center pb-4 border-b border-border/50"><span className="font-medium">Mon - Fri</span><span className="text-foreground">9am - 8pm</span></li>
                      <li className="flex justify-between items-center pb-4 border-b border-border/50"><span className="font-medium">Saturday</span><span className="text-foreground">9am - 7pm</span></li>
                      <li className="flex justify-between items-center"><span className="font-medium">Sunday</span><span className="text-foreground">10am - 5pm</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
