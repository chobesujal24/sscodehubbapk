import { motion } from "framer-motion";
import { Palette, Server, Shield, CreditCard, Search, Cloud } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const features = [
  {
    icon: Palette,
    title: "Design + Development Together",
    desc: "We handle UI/UX design and full development in one workflow — no need to hire separate designers and developers.",
  },
  {
    icon: Server,
    title: "Frontend + Backend Setup",
    desc: "Complete system setup including frontend interface, backend logic, database, and integrations.",
  },
  {
    icon: Shield,
    title: "Authentication & Security Setup",
    desc: "Deploy intelligent virtual agents to streamline tasks.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration Ready",
    desc: "Online payment systems and transaction setup included for your business needs.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "We build websites with clean code and proper structure so search engines like Google can easily understand and rank your site.",
  },
  {
    icon: Cloud,
    title: "Hosting & Deployment Included",
    desc: "We manage hosting setup, domain connection, and deployment — your project goes live without extra work.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <span className="section-label">Features</span>
          <h2 className="section-title mt-4">All features in one place</h2>
          <p className="section-subtitle mt-4">Everything you need to automate operations, boost productivity</p>
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <FadeIn key={f.title} delay={i * 0.08}>
            <div className="group h-full rounded-2xl bg-card border border-border/60 p-7 hover:border-primary/30 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
