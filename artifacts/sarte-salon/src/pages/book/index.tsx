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
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form Side */}
            <FadeIn>
              <h1 className="font-serif text-5xl mb-6">Request an Appointment</h1>
              <p className="text-muted-foreground mb-10">
                Please fill out the details below. Our concierge will contact you shortly to confirm your booking and exact time slot.
              </p>

              {submitted ? (
                <div className="bg-card border border-border p-10 text-center rounded-lg">
                  <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CalendarIcon size={24} />
                  </div>
                  <h3 className="font-serif text-3xl mb-4">Request Received</h3>
                  <p className="text-muted-foreground">
                    Thank you for choosing Sarte Salon. We will be in touch within 24 hours to confirm your appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium tracking-wide">Full Name</label>
                      <Input required className="bg-card border-border focus-visible:ring-primary" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium tracking-wide">Phone Number</label>
                      <Input required type="tel" className="bg-card border-border focus-visible:ring-primary" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium tracking-wide">Email Address</label>
                    <Input required type="email" className="bg-card border-border focus-visible:ring-primary" placeholder="jane@example.com" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium tracking-wide">Service</label>
                      <Select required>
                        <SelectTrigger className="bg-card border-border">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="haircut">Signature Blowout</SelectItem>
                          <SelectItem value="color">Custom Balayage</SelectItem>
                          <SelectItem value="makeup">Evening Glam Makeup</SelectItem>
                          <SelectItem value="nails">Gel Manicure</SelectItem>
                          <SelectItem value="bridal">Bridal Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium tracking-wide">Preferred Time</label>
                      <Select required>
                        <SelectTrigger className="bg-card border-border">
                          <SelectValue placeholder="Select preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12pm - 4pm)</SelectItem>
                          <SelectItem value="evening">Evening (4pm - 8pm)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium tracking-wide">Special Notes (Optional)</label>
                    <Textarea className="bg-card border-border min-h-[100px] focus-visible:ring-primary" placeholder="Tell us about your hair type or desired look..." />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox id="consent" required className="mt-1" />
                    <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                      I understand that this is an appointment request. The salon will contact me to finalize the booking and may require a deposit for certain services.
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 uppercase tracking-widest text-sm rose-glow transition-all">
                    Submit Request
                  </Button>
                </form>
              )}
            </FadeIn>

            {/* Info Side */}
            <FadeIn delay={0.2} className="hidden lg:block">
              <div className="h-full relative bg-card border border-border p-10 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
                  <img src="/hero.png" alt="Salon" className="w-full h-full object-cover grayscale" />
                </div>
                
                <div className="relative z-10 space-y-12">
                  <div>
                    <h3 className="font-serif text-3xl mb-6">Why Book With Us?</h3>
                    <ul className="space-y-4 text-muted-foreground">
                      <li className="flex gap-4"><Star className="text-primary shrink-0 w-5 h-5" /> Award-winning stylists dedicated to your vision.</li>
                      <li className="flex gap-4"><Star className="text-primary shrink-0 w-5 h-5" /> Premium, clean, and sustainable products.</li>
                      <li className="flex gap-4"><Star className="text-primary shrink-0 w-5 h-5" /> A serene, private atmosphere for ultimate relaxation.</li>
                    </ul>
                  </div>

                  <div className="p-6 border border-border bg-background/80 backdrop-blur">
                    <h4 className="font-serif text-xl mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" /> Hours
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex justify-between"><span>Mon - Fri</span><span>9am - 8pm</span></li>
                      <li className="flex justify-between"><span>Saturday</span><span>9am - 7pm</span></li>
                      <li className="flex justify-between"><span>Sunday</span><span>10am - 5pm</span></li>
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
