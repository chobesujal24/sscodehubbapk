import { Check, X } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const usFeatures = [
  "Affordable Pricing with Premium Quality",
  "Fast Delivery Time",
  "Fully Custom Design",
  "Complete Solution in One Place",
  "Ongoing Support & Easy Communication",
];

const othersFeatures = [
  "Hidden costs for hosting, revisions, or extra features",
  "Requires manual updates as you scale",
  "Long delays due to poor planning or outsourcing",
  "Charge separately for backend, deployment, and integrations",
  "Limited support or slow response after payment",
];

const ComparisonSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <span className="section-label">Comparison</span>
          <h2 className="section-title mt-4">Why Choose Us Over Others</h2>
          <p className="section-subtitle mt-4">See how we compare against others in performance, growth</p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Us */}
        <FadeIn direction="left">
          <div className="h-full rounded-2xl bg-card border border-primary/30 p-8 glow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-primary" />
              </div>
              <span className="font-bold text-foreground">SS CODE HUB</span>
            </div>
            <ul className="space-y-4">
              {usFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Others */}
        <FadeIn direction="right">
          <div className="h-full rounded-2xl bg-card border border-border/60 p-8">
            <h3 className="text-lg font-semibold text-muted-foreground mb-6">Others</h3>
            <ul className="space-y-4">
              {othersFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="w-5 h-5 text-destructive/60 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
