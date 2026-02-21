import { Zap, Search, Link2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const benefits = [
  {
    icon: Zap,
    title: "Fast Delivery Time",
  },
  {
    icon: Search,
    title: "SEO Optimized",
  },
  {
    icon: Link2,
    title: "Seamless Integration",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="section-label">Benefits</span>
            <h2 className="section-title mt-4">Why Choose Us?</h2>
            <p className="section-subtitle mt-4">
              Everything you need to Build, optimize, and scale
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.12}>
              <div className="group relative rounded-2xl bg-card border border-border/60 p-8 hover:border-primary/30 transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 mx-auto group-hover:bg-primary/20 transition-colors">
                  <b.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{b.title}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
